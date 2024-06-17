import { useState } from 'react';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='App'>
            <h1>Chat App</h1>
            {isLoggedIn ? (
                <h1>You're Logged In</h1>
            ) : (
                <div className='initial-page'>
                    <div className='inputs'>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Room' />
                    </div>
                    <button>Enter Chat</button>
                </div>
            )}
        </div>
    );
}

export default App;
