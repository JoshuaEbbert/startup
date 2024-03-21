const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer) {
  // Create a websocket object
  const wss = new WebSocketServer({ noServer: true });

  // Handle the protocol upgrade from HTTP to WebSocket
  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });

  // Keep track of all the connections so we can forward messages (notifications)
  let connections = [];

  wss.on('connection', (ws, req) => { // ws representing single connection/session
    const url = new URL(req.url, `http://${req.headers.host}`);
    let username = url.searchParams.get('username');
    const connection = {username: username, id: uuid.v4(), alive: true, ws: ws };
    connections.push(connection);

    // Sending updated list of users to all connected clients
    sendActiveUsers(connections);

    // Forward messages to everyone except the sender
    ws.on('message', function message(data) {
      connections.forEach((c) => {
        if (c.id !== connection.id) {
          c.ws.send(data);
        }
      });
    });

    // Remove the closed connection so we don't try to forward anymore
    ws.on('close', () => {
      connections.findIndex((o, i) => {
        if (o.id === connection.id) {
          connections.splice(i, 1);
          return true;
        }
      });
      sendActiveUsers(connections);
    });

    // Respond to pong messages by marking the connection alive
    ws.on('pong', () => {
      connection.alive = true;
    });
  });

  // Keep active connections alive
  setInterval(() => {
    connections.forEach((c) => {
      // Kill any connection that didn't respond to the ping last time
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        c.ws.ping();
      }
    });
  }, 10000);

  function sendActiveUsers(connections) {
    let users = connections.map((c) => c.username);
    let message = JSON.stringify({ msgType: 'activeUsers', data: users });
    connections.forEach((c) => {
      c.ws.send(message);
    });
  }
}

module.exports = { peerProxy };
