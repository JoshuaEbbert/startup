import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; {/* Reformat to include Button object if styling turns out poorly */}

export function Unauthenticated(props) {
    const [username, setUsername] = React.useState(props.username);
    const [password, setPassword] = React.useState('');

    const login = () => {
        authenticateCredentials('/api/auth/login');
    };

    const create = () => {
        authenticateCredentials('/api/auth/create');
    };

    async function authenticateCredentials(url) {
        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify({ username: username, password: password }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        });
    
        console.log(response);
        if (response.ok) {
            localStorage.setItem('username', username);
            props.onLogin(username);
        } else {
            const body = await response.json();
            {/* TODO: implement alert */}
        }
    }

    return (
        <div className="login-box">
            <h1 className="mb-3">Welcome</h1>
            <div className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Type username here" />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Type password here" />

                <div className="m-3 d-flex justify-content-between">
                    <button style={{margin: "2px"}} className="btn btn-primary gap-3" onClick={login}>Login</button>
                    <button style={{margin: "2px"}} className="btn btn-primary gap-3" onClick={create}>Create Account</button>
                </div>
            </div>
        </div>
    );
}