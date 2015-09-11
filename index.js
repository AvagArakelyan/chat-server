var ChatServer = require('./src/chat-server.js');
var ChatClient = require('./src/chat-client.js');

new ChatServer().start();

var client = new ChatClient();
client.connect('http://localhost:6000');


