import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import InitialPage from './components/InitialPage';
import Chatroom from './components/Chatroom';

let socket;
const CONNECTION_PORT = 'localhost:3003/';

function App() {
    // Before user connects
    const [isConnected, setIsConnected] = useState(false);
    const [room, setRoom] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        socket = io(CONNECTION_PORT);
    }, [CONNECTION_PORT]);

    const connectToRoom = () => {
        setIsConnected(true);
        socket.emit('join_room', room);
    };

    return (
        <div className='App'>
            {isConnected ? (
                <Chatroom username={username} socket={socket} room={room} />
            ) : (
                <InitialPage
                    setUsername={setUsername}
                    setRoom={setRoom}
                    connectToRoom={connectToRoom}
                />
            )}
        </div>
    );
}

export default App;
