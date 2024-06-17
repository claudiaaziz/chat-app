import './Chatroom.css';

const Chatroom = ({ setMessage, sendMessage, messageList, message, name }) => {
    return (
        <div className='chatroom'>
            <div className='messages'>
                {messageList.map((content, idx) => (
                    <h1 key={idx}>
                        <div className='message-div'>
                            <div
                                className='individual-message'
                                id={content.author !== name ? 'other-user' : ''}
                            >
                                {content.author}: {content.message}
                            </div>
                        </div>
                    </h1>
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
    );
};

export default Chatroom;
