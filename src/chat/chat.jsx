import React, { useState, useRef, useEffect } from 'react';
import './chat.css';

export function Chat({ username, activeUsers, setActiveUsers }) {
    const socket = useRef(null);
    const [question, setQuestion] = useState('');
    const [chatMessages, setChatMessages] = useState(getChatHistory());

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

    function getChatHistory() {
        const key = username.replace(/\s/g, '') + 'ChatHistory' // chat history keys take the form of 'usernameChatHistory'
        return JSON.parse(localStorage.getItem(key)) ?? [{'type': 'replies', 'text': 'Hello. How can I help you with your test preparation today?'}];
    }

    function submitMessage() {
        if (question) {
            const sanitizedQuestion = sanitizeInput(question);
            setQuestion(''); // Clear the input

            updateTrending(sanitizedQuestion);

            const messageDict = {'type': 'sent', 'text': sanitizedQuestion};
            const chatHistory = getChatHistory();
            chatHistory.push(messageDict);
            const key = username.replace(/\s/g, '') + 'ChatHistory';
            localStorage.setItem(key, JSON.stringify(chatHistory));
            setChatMessages(chatHistory);

            getReply(question);
        }
        setQuestion('');
    }

    async function getReply(message) {
        try {
            const chatHistory = getChatHistory();
            const promptText = constructPrompt(chatHistory, message);
    
            const response = await fetch("/api/chat", {
                method: 'post',
                body: JSON.stringify({ promptText: promptText }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            });

            // Log the response text
            let text = await response.text();
            console.log(text);

            const messageDict = {'type': 'replies', 'text': text};
            chatHistory.push(messageDict);
            const key = username.replace(/\s/g, '') + 'ChatHistory';
            localStorage.setItem(key, JSON.stringify(chatHistory));
    
            setChatMessages(chatHistory);
        } catch (error) {
            console.error('Error:', error);

            const chatHistory = getChatHistory();
            let text = "Error: Failed to generate a response. Please try again.";
            console.log(text);
            const messageDict = {'type': 'replies', 'text': text};
            chatHistory.push(messageDict);
            const key = username.replace(/\s/g, '') + 'ChatHistory';
            localStorage.setItem(key, JSON.stringify(chatHistory));
        }
    }   

    async function updateTrending(question) {
        try {
            const response = await fetch('/api/trending', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({'question': question}),
            });
      
            // Store what the service gives us as the trending questions
            const trending = await response.json();
            localStorage.setItem('trendingQuestions', JSON.stringify(trending));
        } catch {
            // If there was an error then just track scores locally
            updateTrendingLocal(question);
        }
    }

    function updateTrendingLocal(question) {
        let trendingQuestions = JSON.parse(localStorage.getItem('trendingQuestions')) ?? {};
        if (trendingQuestions[question] == null) {
            trendingQuestions[question] = 1;
        } else {
            trendingQuestions[question]++;
        }
        localStorage.setItem('trendingQuestions', JSON.stringify(trendingQuestions));
    }

    function constructPrompt(chatHistory, message) {
        let promptText = "The following is a conversation with an AI assistant named TestPrep StrateGPT designed to help with test prep for college exams such as the ACT and SAT. The assistant is helpful, creative, clever, and very friendly.\n\n";
        for (let messageDict of chatHistory) {
            promptText += messageDict['text'] + "\n";
        }
        promptText += message;
        return promptText;
    }

    function sanitizeInput(str) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    const messagesToDisplay = [];
    if (chatMessages.length) {
        for (const [i, msg] of chatMessages.entries()) {
            messagesToDisplay.push(
                <li key={i} className={msg['type']}>
                    <span>{msg['text']}</span>
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
        <main className="chat"> 
            <div className="messages">
                <ul className="messages-list"> {/* li of 'replies' and 'sent' */}
                    {messagesToDisplay}
                </ul>
            </div>

                <form className="chat-box" id="chat-input" onSubmit={(e) => { e.preventDefault(); submitMessage(); }}>
                    <div className="input-container">
                        <input type="text" className="message-input mr-3" placeholder="Type message here" value={question} onChange={(e) => setQuestion(e.target.value)} />
                        <button className="btn btn-primary ml-3" type="submit">Send</button>
                    </div>
                </form>
      
        </main>
    );
}