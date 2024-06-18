import './InitialPage.css'

const InitialPage = ({ setUsername, setRoom, connectToRoom }) => {
    return (
        <div className='initial-page'>
            <div className='inputs'>
                <input
                    type='text'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Room'
                    onChange={(e) => setRoom(e.target.value)}
                />
            </div>
            <button onClick={connectToRoom}>Enter Chat</button>
        </div>
    );
};

export default InitialPage;
