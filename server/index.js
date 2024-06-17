const express = require('express');
const socket = require('socket.io');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const server = app.listen('3003', () =>
    console.log('Server running on port 3003')
);

// io = socket(server);
io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'X-Requested-With',
            'Accept',
            'Origin',
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Methods',
            'Access-Control-Allow-Credentials',
        ],
        withCredentials: true,
    },
});

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('join_room', (data) => {
        socket.join(data);
        console.log('User joined room: ' + data);
    });

    socket.on('send_message', (data) => {
        socket.to(data.room).emit('receive_message', data.content);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
