import './InitialPage.css'

const InitialPage = ({ setName, setRoom, connectToRoom }) => {
    return (
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
    );
};

export default InitialPage;
