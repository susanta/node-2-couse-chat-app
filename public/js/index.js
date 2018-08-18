var socket = io();

socket.on('connect', function() {
    console.log("Connected to server");

    // socket.emit('createEmail', {
    //     to: 'hello@example.com',
    //     text: 'Hello create email'
    // });

    socket.emit('createMessage', {
        from: 'Susanta',
        text: 'Works for me.'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function(email) {
//     console.log("New email", email);
// });

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});