import React from 'react';
import './trending.css';

export function Trending({ username }) {
    const [username, setUsername] = useState(username);

    return (
        <main className="trending"> 
            <div class="row pl-25 pr-25 mt-5 mb-5">
                <div class="col-lg-6 pl-25 mb-5">
                    <h3>Active Users</h3>
                    <p>Other users currently using StrateGPT to aid in their test prep</p>
                    <ul class="list-group active-users"></ul>
                </div>
        
                <div class="col-lg-6 pr-25">
                    <h3>Popular Topics</h3>
                    <p>Questions that are currently trending in the chat</p>
                    <ul class="list-group trending"></ul>
                </div>
            </div>
        </main>
  );
}