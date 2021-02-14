// = Packages imports
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');

// Variables
const app = express();
const server = Server(app);
const io = socket(server);
const data = require('./data');
const PORT = 3001;

// == Express
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
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
        <li><code>POST http://localhost:${PORT}/login</code></li>
      </ul>
    </div>
  `);
});

let userId = 2;
app.post('/login', (req, res) => {
  console.log('>> POST /login', req.body);

  // extracting request data from the body
  const { username } = req.body;

  if (username) {
    // create new user
    const newUser = {
      id: ++userId,
      username,
    };
    // push new user in DB
    data.users.push(newUser);
    // send user's data
    res.json({user: newUser});
  } else {
    console.log('<< 401 UNAUTHORIZED');
    response.status(401).end();
  }
});

app.get('/messages', (req, res) => {
  console.log('>> GET /messages');

  // get messages in DB
  const messages = data.messages;

  // http response
  if (messages) {
    console.log(`<< 200 OK - ${messages.length} messages sent`);
    res.json({messages});
  } else {
    console.log('<< 404 NOT FOUND');
    res.status(404).end();
  }
});

// == Socket.io
let msgId = 9;
io.on('connection', (ws) => {
  console.log('>> socket.io - connected');

  ws.on('send_message', (message) => {
    console.log(`>> msg recieved: ${message}`);
    message.id = ++msgId;
    // saving message in DB
    data.messages.push(message);
    // broadcast to other users
    io.emit('send_message', message);
  });
});

// == Server
server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});