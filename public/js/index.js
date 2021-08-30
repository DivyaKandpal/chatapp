const socket = io();
socket.on('connect', function(){    //listening for an event
    console.log('Connected to server');
    
});

socket.on('disconnect', ()=>{
    console.log('Disconnected to server')
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});