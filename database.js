const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./public/config.json');

const url = `mongodb+srv://${config.usernameMongoDB}:${config.passwordMongoDB}@${config.hostnameMongoDB}`;
const client = new MongoClient(url);
const db = client.db('strategpt');
const userCollection = db.collection('user');
const trendingCollection = db.collection('trending');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

// function addTrending(question) {
//   scoreCollection.insertOne(question);
// }

// function getTrending() {
//   const query = { question: {//fill in} };
//   const options = {
//     sort: { score: -1 },
//     limit: 5,
//   };
//   const cursor = scoreCollection.find(query, options);
//   return cursor.toArray();
// }

module.exports = {
  getUser,
  getUserByToken,
  createUser,
//   addTrending,
//   getTrending,
};
