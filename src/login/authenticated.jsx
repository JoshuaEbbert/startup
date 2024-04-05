import React from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthState } from './authState';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
        })
        .catch(() => {
            // Logout failed. Assuming offline
        })
        .finally(() => {
            localStorage.removeItem('username');
            props.onLogout('', AuthState.Unauthenticated);
        });
    }

  return (
    <div className="logged-in-box">
            <h1 className="mb-3">Welcome</h1>
            <div className="logged-in-form">
                <label htmlFor="username">Logged in as {props.username}</label>
                <div className="m-3 d-flex justify-content-between">
                    <button style={{margin: "2px"}} className="btn btn-primary gap-3" onClick={() => navigate('/chat')}>Chat</button>
                    <button style={{margin: "2px"}} className="btn btn-secondary gap-3" onClick={() => logout()}>Logout</button>
                </div>
            </div>
        </div>
  );
}