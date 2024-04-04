import React from 'react';
import './chat.css';

export function Chat({ username }) {
    const [username, setUsername] = useState(username);

    return (
        <main className="chat"> 
        <div>chat displayed here</div>
        </main>
    );
}