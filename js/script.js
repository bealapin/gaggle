const socket = io('http://localhost:5000');



var name = "shayan";

socket.emit('new-user', name);

socket.on('chat-message', message => {
    console.log(message);
    console.log(socket.id)
})