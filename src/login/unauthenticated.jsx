import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; {/* Reformat to include Button object if styling turns out poorly */}
import {MessageDialog} from './messageDialog';

export function Unauthenticated(props) {
    const login = () => {
        // login logic here
    };

    const create = () => {
        // account creation logic here
    };

    return (
        <div className="login-box">
            <h1 className="mb-3">Welcome</h1>
            <div className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Type username here" />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" placeholder="Type password here" />

                <div className="m-3 d-flex justify-content-between">
                    <button style={{margin: "2px"}} className="btn btn-primary gap-3" onClick={login}>Login</button>
                    <button style={{margin: "2px"}} className="btn btn-primary gap-3" onClick={create}>Create</button>
                </div>
            </div>
        </div>
    );
}