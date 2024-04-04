import React from 'react';
import './chat.css';

export function Chat({ username, activeUsers, setActiveUsers }) {
    const socket = useRef(null);

    useEffect(() => {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        socket.current = new WebSocket(`${protocol}://${window.location.host}/ws?username=${encodeURIComponent(username)}`);
        socket.current.onopen = () => {
            setActiveUsers(new Set([username]));
        };
        socket.current.onclose = () => {
            setActiveUsers(new Set(["Not connected to the server. Please refresh the page."]));
        };
        socket.current.onmessage = async (event) => {
            const msg = JSON.parse(await event.data);
            if (msg.msgType === 'activeUsers') {
                setActiveUsers(new Set(msg.data));
            }
        };

        // Clean up function
        return () => {
            if (socket.current) {
                socket.current.close();
            }
        };
    }, [username, setActiveUsers]);

    return (
        <main className="chat"> 
        <div>chat displayed here</div>
        </main>
    );
}