'use strict';

var socketIOClient = require('socket.io-client');

module.exports = ChatClient;

function ChatClient(){
}

ChatClient.prototype = {
    constructor: ChatClient,
    connect : connect
};

function connect(url, options){
    var socket = socketIOClient(url, options);

    socket.on('connect', function(){
        socket.on('post', function(data){
            console.log('client:'+ data.message);
        });

        socket.emit('send', {
            message: 'Thanks'
        });
    });

    socket.on('disconnect', console.warn);

}



