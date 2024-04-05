(async () => {
    const username = localStorage.getItem('username');
    if (username) {
        const chatbox = document.querySelector('.chat-box');
        if(chatbox) {
            chatbox.style.display = 'block';
        }
    }
})();

document.getElementById('chat-input').addEventListener('submit', function(event) {
    event.preventDefault();
});

const chatDisplay = document.querySelector('.messages-list');
console.log(getChatHistory());
for (let messageDict of getChatHistory()) { // chat history is a list of dictionaries of format {'type': 'replies' or 'sent', 'text': 'message'}
    const messageEl = document.createElement('li');
    messageEl.innerHTML = `<span>${messageDict['text']}</span>`;
    messageEl.className = messageDict['type']; // set the class based on the type
    console.log(messageEl);
    chatDisplay.appendChild(messageEl);
}

let activeUsers = new Set();

function configureWebSocket() {
    const username = localStorage.getItem('username') ?? 'Anonymous';
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws?username=${encodeURIComponent(username)}`);
    this.socket.onopen = () => {
        activeUsers.clear();
        activeUsers.add(username);
    };
    this.socket.onclose = () => {
        activeUsers.clear();
        activeUsers.add('Not connected to the server. Please refresh the page.');
    };
    this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data);
        if (msg.msgType === 'activeUsers') {
            activeUsers = new Set(msg.data);
        }
    };
}

async function getTrendingQuestions() { // dictionary with counts per question
    try {
        const response = await fetch('/api/trending', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(newScore),
        });
  
        // Store what the service gave us as the high scores
        const scores = await response.json();
        localStorage.setItem('scores', JSON.stringify(scores));
      } catch {
        // If there was an error then just track scores locally
        this.updateScoresLocal(newScore);
      }
}

function getChatHistory() {
    const key = getUsername().replace(/\s/g, '') + 'ChatHistory' // chat history keys take the form of 'usernameChatHistory'
    return JSON.parse(localStorage.getItem(key)) ?? [{'type': 'replies', 'text': 'Hello. How can I help you with your test preparation today?'}];
}

function getUsername() {
    return localStorage.getItem('username') ?? 'No username provided';
}

function submitMessage() {
    const messageEl = document.querySelector('.message-input');
    console.log(messageEl)
    const message = messageEl.value.trim();
    messageEl.value = '';
    if (message) {
        updateTrending(message);

        // logic required to send message
        const messageDict = {'type': 'sent', 'text': message};
        const chatHistory = getChatHistory();
        chatHistory.push(messageDict);
        const key = getUsername().replace(/\s/g, '') + 'ChatHistory';
        localStorage.setItem(key, JSON.stringify(chatHistory));
        const messageEl = document.createElement('li');
        messageEl.innerHTML = `<span>${message}</span>`;
        messageEl.className = 'sent';
        chatDisplay.appendChild(messageEl);
        messageEl.scrollIntoView();
        getReply(message);
    }
}

function getReply(message) { 
    let apiKey;
    fetch('./service/config.json')
        .then(response => response.json())
        .then(data => {
            apiKey = data.API_KEY;
            const chatHistory = getChatHistory();
            const promptText = constructPrompt(chatHistory, message);

            const requestBody = {
                messages: [
                    { role: "user", content: promptText }
                ],
                model: "gpt-3.5-turbo", // The model identifier
                max_tokens: 100, // Maximum number of tokens to generate
                temperature: 0.7, // Control randomness of the generated text (optional)
                stop: ["\n"] // Stop generation at the first newline character (optional)
            };
            
            let text;
            fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify(requestBody)
            })
            .then(response => response.json())
            .then(data => {
                text = data.choices[0]['message']['content'].trim();
                console.log(text);
                messageDict = {'type': 'replies', 'text': text};
                chatHistory.push(messageDict);
                const key = getUsername().replace(/\s/g, '') + 'ChatHistory';
                localStorage.setItem(key, JSON.stringify(chatHistory));
                const messageEl = document.createElement('li');
                messageEl.innerHTML = `<span>${messageDict['text']}</span>`;
                messageEl.className = messageDict['type'];
                chatDisplay.appendChild(messageEl);
                messageEl.scrollIntoView();
            })
            .catch(error => {
                console.error("Error:", error);
                text = "Error: Failed to generate a response. Please try again.";
            });
        });
}

function constructPrompt(chatHistory, message) {
    let promptText = "The following is a conversation with an AI assistant named TestPrep StrateGPT designed to help with test prep for college exams such as the ACT and SAT. The assistant is helpful, creative, clever, and very friendly.\n\n";
    for (let messageDict of chatHistory) {
        promptText += messageDict['text'] + "\n";
    }
    promptText += message;
    return promptText;
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
        this.updateTrendingLocal(question);
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

configureWebSocket();