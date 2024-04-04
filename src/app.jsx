import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body">
        <header class="d-flex flex-wrap justify-content-center py-3 border-bottom">
            <div href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 pl-25 align-items-center">
            <img src="iconStrateGPT.svg" alt="Icon StrateGPT" width="45" height="45"></img>
            </div>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span class="fs-4">Test Prep StrateGPT<sup>&reg;</sup></span>
            </a>

            <div class="header-list pr-25">
            <ul class="nav nav-pills">
                <li class="nav-item"><a href="index.html" class="nav-link" aria-current="page">Login</a></li>
                <li class="nav-item"><a href="chat.html" class="nav-link">Chat</a></li>
                <li class="nav-item"><a href="trending.html" class="nav-link">Trending</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
            </ul>
            </div>
        </header>

        <main>
            App components go here
        </main>

        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <div class="col-md-4 d-flex align-items-center pl-25">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img src="iconStrateGPT.svg" alt="Icon StrateGPT" width="24" height="24"></img>
            </a>
            <span class="mb-3 mb-md-0 text-muted">© 2024 TestPrep StrateGPT</span>
            </div>

            <div class="align-items-center justify-content-center">
            <span class="ms-3 text-muted mobile-disappear username-display"></span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex pr-25">
            <li class="ms-3 text-muted mobile-disappear">Joshua Ebbert</li>
            <li class="ms-3 mobile-disappear"><a class="text-muted" href="https://github.com/JoshuaEbbert/startup/tree/main">Source Code</a></li>
            </ul>
        </footer>

        <script src="init.js"></script>
    </div>
    );
}