import React, { useState, useRef, useEffect } from 'react';
import './trending.css';

export function Trending({ username, activeUsers, setActiveUsers }) {
    const socket = useRef(null);
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetch('/api/trending')
          .then((response) => response.json())
          .then((trending) => {
            setTrending(trending);
            localStorage.setItem('trending', JSON.stringify(trending));
          })
          .catch(() => {
            const trendingText = localStorage.getItem('trending');
            if (trendingText) {
              setTrending(JSON.parse(trendingText));
            }
          });
      }, []);

    useEffect(() => {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        socket.current = new WebSocket(`${protocol}://${window.location.host}/ws?username=${encodeURIComponent(username)}`);
        socket.current.onopen = () => {
            setActiveUsers(new Set([username]));
            // displayUserList(activeUsers);
        };
        socket.current.onclose = () => {
            setActiveUsers(new Set(["Not connected to the server. Please refresh the page."]));
            // displayUserList(activeUsers);
        };
        socket.current.onmessage = async (event) => {
            const msg = JSON.parse(await event.data);
            if (msg.msgType === 'activeUsers') {
                setActiveUsers(new Set(msg.data));
            }
            // displayUserList(activeUsers);
        };

        // Clean up function
        return () => {
            if (socket.current) {
                socket.current.close();
            }
        };
    }, [username, setActiveUsers]);

    const userListItems = Array.from(activeUsers).map((user, index) => (
        <li key={index} className='list-group-item'>
            {user}
        </li>
    ));

    const trendingItems = [];
    if (trending.length) {
        if (trending.length > 7) {
            setTrending(trending.slice(0, 7));
        }

        for (const [i, topic] of trending.entries()) {
            trendingItems.push(
                <li key={i} className='list-group-item'>
                {topic}
                </li>
            );
        }
    } else {
        trendingItems.push(
            <li key={0} className='list-group-item'>
                Be the first to ask a question!
            </li>
        );
    }

    return (
        <main className="trending"> 
            <div className="row pl-25 pr-25 mt-5 mb-5">
                <div className="col-lg-6 pl-25 mb-5">
                    <h3>Active Users</h3>
                    <p>Other users currently using StrateGPT to aid in their test prep</p>
                    <ul className="list-group active-users">
                        {userListItems}
                    </ul>
                </div>
        
                <div className="col-lg-6 pr-25">
                    <h3>Popular Topics</h3>
                    <p>Questions that are currently trending in the chat</p>
                    <ul className="list-group trending">
                        {trendingItems}
                    </ul>
                </div>
            </div>
        </main>
  );
}