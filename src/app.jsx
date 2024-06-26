import React from 'react';
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Login } from './login/login';
import { Chat } from './chat/chat';
import { Trending } from './trending/trending';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    const [username, setUsername] = React.useState(localStorage.getItem('username') || '');
    const currentAuthState = username === '' ? AuthState.Unauthenticated : AuthState.Authenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
    const [activeUsers, setActiveUsers] = React.useState(new Set());

    return (
        <BrowserRouter>
            <div className="body">
                <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
                    <div href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 pl-25 align-items-center">
                    <img src="iconStrateGPT.svg" alt="Icon StrateGPT" width="45" height="45"></img>
                    </div>
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Test Prep StrateGPT<sup>&reg;</sup></span>
                    </a>

                    <div className="header-list pr-25">
                        <ul className="nav nav-pills">
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/'>
                                Login
                                </NavLink>
                            </li>
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                <NavLink className='nav-link' to='chat'>
                                    Chat
                                </NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                <NavLink className='nav-link' to='trending'>
                                    Trending
                                </NavLink>
                                </li>
                            )}
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='about'>
                                About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </header>

                <Routes>
                    <Route 
                        path='/' 
                        element={
                            <Login 
                                username={username}
                                authState={authState}
                                onAuthChange={(username, authState) => {
                                setAuthState(authState);
                                setUsername(username);
                                }}
                            />
                        } 
                        exact 
                    />
                    <Route 
                        path='/login' 
                        element={
                            <Login 
                                username={username}
                                authState={authState}
                                onAuthChange={(username, authState) => {
                                setAuthState(authState);
                                setUsername(username);
                                }}
                            />
                        }  
                    />
                    <Route path='/chat' element={<Chat username={username} activeUsers={activeUsers} setActiveUsers={setActiveUsers}/>} />
                    <Route path='/trending' element={<Trending username={username} activeUsers={activeUsers} setActiveUsers={setActiveUsers}/>} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                    <div className="col-md-4 d-flex align-items-center pl-25">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img src="iconStrateGPT.svg" alt="Icon StrateGPT" width="24" height="24"></img>
                        </a>
                        <span className="mb-3 mb-md-0 text-muted">© 2024 TestPrep StrateGPT</span>
                    </div>

                    <div className="align-items-center justify-content-center">
                        <span className="ms-3 text-muted mobile-disappear username-display">{username}</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pr-25">
                        <li className="ms-3 text-muted mobile-disappear">Joshua Ebbert</li>
                        <li className="ms-3 mobile-disappear"><a className="text-muted" href="https://github.com/JoshuaEbbert/startup/tree/main">Source Code</a></li>
                    </ul>
                </footer>
            </div>
        </BrowserRouter>
    ); 
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
}

export default App;