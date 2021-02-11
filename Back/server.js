// = Packages imports
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');

// Variables
const app = express();
const server = Server(app);
const PORT = 3001;

// == Express
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send(`
    <div style="margin: 6rem auto; width: 400px; line-height: 1.5rem">
      <h1 style="text-align: center">Hello !</h1>
      <h2 style="text-align: center">And welcome to Simple Chat (server)</h2>
      <p style="line-height: .3rem">If you see this message, it means that the server is started</p>
      <p style="line-height: .3rem">You can start using the API ;-)</p>
      <ul style="display: inline-block; margin-top: .3rem">
        <li><code>GET http://localhost:${PORT}/messages</code></li>
        <li><code>POST http://localhost:${PORT}/messages</code></li>
      </ul>
    </div>
  `);
});

// == Server
server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});