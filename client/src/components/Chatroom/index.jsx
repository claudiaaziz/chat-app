import './Chatroom.css';

const Chatroom = ({ setMessage, sendMessage, messageList }) => {
    return (
        <div className='chatroom'>
            <div className='messages'>
                {messageList.map((content, idx) => ( // temp
                    <h1 key={idx}>
                        {idx}
                        {content.author} {content.message}
                    </h1>
                ))}
            </div>
            <div className='message-input'>
                <input
                    type='text'
                    placeholder='Message'
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatroom;
