const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const fs = require('fs').promises;
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

let apiKey;

// Load the API key from config.json when the server starts
fs.readFile('/home/ubuntu/services/startup/config.json', 'utf-8')
  .then(data => {
    const config = JSON.parse(data);
    apiKey = config.API_KEY;
  })
  .catch(err => {
    console.error(err);
  });

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use cookie parsing middleware
app.use(cookieParser());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.username, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

secureApiRouter.post('/chat', async (req, res) => {
  // assumes req.body['promptText'] is the user's input
  const requestBody = {
      messages: [
          { role: "user", content: req.body['promptText'] }
      ],
      model: "gpt-3.5-turbo", // The model identifier
      max_tokens: 100, // Maximum number of tokens to generate
      temperature: 0.7, // Control randomness of the generated text (optional)
  };

  response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
  });

  // Log the response text
  let responseText = await response.text();
  console.log(responseText);

  try {
      data = JSON.parse(responseText);
  } catch (error) {
      console.error('Error parsing JSON:', error);
  }
  let text = data.choices[0]['message']['content'].trim();
  console.log(text);

  res.send(text);
});

// updateScores
secureApiRouter.get('/trending', async (_req, res) => {
  const trending = await DB.getTrending();
  res.send(trending);
});

// updateTrending
secureApiRouter.post('/trending', (req, res) => {
  const trending = DB.updateTrending(req.body.question);
  res.send(trending);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});
  
// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
