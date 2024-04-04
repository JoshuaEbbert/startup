import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ username, authState, onAuthChange }) {
  return (
    <main className="login"> 
        <div>
            {authState === AuthState.Authenticated && (
                <Authenticated 
                    username={username} 
                    onLogout={() => onAuthChange(username, AuthState.Unauthenticated)} 
                />
            )}
            {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                    username={username}
                    onLogin={(loginUserName) => {
                        onAuthChange(loginUserName, AuthState.Authenticated);
                    }}
                />
            )}
        </div>
    </main>
  );
}