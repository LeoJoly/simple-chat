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
    <div>Hello ! I'm the server...</div>
  `);
});

// == Server
server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});