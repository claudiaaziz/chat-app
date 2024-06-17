import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

let socket;
const CONNECTION_PORT = 'localhost:3003/';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [room, setRoom] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        socket = io(CONNECTION_PORT);
    }, [CONNECTION_PORT]);

    const connectToRoom = () => {
        socket.emit('join_room', room);
    };

    return (
        <div className='App'>
            <h1>Chat App</h1>
            {isLoggedIn ? (
                <h1>You're Logged In</h1>
            ) : (
                <div className='initial-page'>
                    <div className='inputs'>
                        <input
                            type='text'
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Room'
                            onChange={(e) => setRoom(e.target.value)}
                        />
                    </div>
                    <button onClick={connectToRoom}>Enter Chat</button>
                </div>
            )}
        </div>
    );
}

export default App;
