'use strict';

var http = require('http');
var socketIO = require('socket.io');

module.exports = ChatServer;

function ChatServer(){}

ChatServer.prototype = {
    constructor: ChatServer,
    start : start
};

/**
 * Public
 */
function start(){
    var server = http.createServer();
    var io = socketIO(server);

    io.on('connection', function(socket){
        socket.emit('post', {
            message: 'Welcome to Picsart Chat World'
        });

        socket.on('send', function(data){
            console.log('server:', data.message);
        });

        socket.on('disconnect', console.warn);
    });
    server.listen(6000);
}
