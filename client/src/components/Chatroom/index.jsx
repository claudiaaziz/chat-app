import { useEffect, useState } from 'react';
import './Chatroom.css';

const Chatroom = ({ username, socket, room }) => {
    // After user connects
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageList((prev) => [...prev, data]);
        });
    }, []);

    const sendMessage = () => {
        const messageContent = {
            room,
            content: {
                author: username,
                message,
            },
        };

        socket.emit('send_message', messageContent);
        setMessageList((prev) => [...prev, messageContent.content]);
        setMessage('');
    };

    return (
        <>
            <h1>{room}</h1>
            <div className='chatroom'>
                <div className='messages'>
                    {messageList.map((content, idx) => (
                        <div className='message-div' key={idx}>
                            <div
                                className='individual-message'
                                id={
                                    content.author !== username
                                        ? 'other-user'
                                        : ''
                                }
                            >
                                {content.author}: {content.message}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='message-input'>
                    <input
                        type='text'
                        placeholder='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    );
};

export default Chatroom;
