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
    const [name, setName] = useState('');

    // After user connects
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        socket = io(CONNECTION_PORT);
    }, [CONNECTION_PORT]);

    const connectToRoom = () => {
        setIsConnected(true);
        socket.emit('join_room', room);
    };

    const sendMessage = () => {
        const messageContent = {
            room,
            content: {
                author: name,
                message,
            },
        };

        socket.emit('send_message', messageContent);
        setMessageList((prev) => [...prev, messageContent.content]);
        setMessage('');
    };

    return (
        <div className='App'>
            <h1>{name ? name : 'Chat App'}</h1>
            {isConnected ? (
                <Chatroom
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                    messageList={messageList}
                />
            ) : (
                <InitialPage
                    setName={setName}
                    setRoom={setRoom}
                    connectToRoom={connectToRoom}
                />
            )}
        </div>
    );
}

export default App;
