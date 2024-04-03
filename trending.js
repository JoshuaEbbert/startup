let activeUsers = new Set();

function configureWebSocket() {
    const username = localStorage.getItem('username') ?? 'Anonymous';
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws?username=${encodeURIComponent(username)}`);
    this.socket.onopen = () => {
        activeUsers.clear();
        activeUsers.add(username);
        displayUserList(activeUsers);
    };
    this.socket.onclose = () => {
        activeUsers.clear();
        activeUsers.add('Not connected to the server. Please refresh the page.');
        displayUserList(activeUsers);
    };
    this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data);
        if (msg.msgType === 'activeUsers') {
            activeUsers = new Set(msg.data);
        }
        // display users
        displayUserList(activeUsers);
    };
}

async function loadTrendingQuestions() { // dictionary with counts per question. Placeholder for the database
    let trending;
    try {
        // Get the trending questions from the service
        const response = await fetch('/api/trending');
        trending = await response.json();

        // Store in local storage in the event the service is down
        localStorage.setItem('trendingQuestions', JSON.stringify(trending));
    } catch {
        // If there was an error then just use the last known trending questions
        const trendingQuestions = localStorage.getItem('trendingQuestions');

        if (trendingQuestions) {
            trending = JSON.parse(trendingQuestions);
        } else {
            trending = {"No questions currently trending": 0};
        }
    }

    displayTrending(trending);
}   
   
async function displayTrending(questions) {    
    const trendingDisplay = document.querySelector('.trending');
    
    if (!(questions[0] === "msg")) {
        for (let key of questions) { // returns a dictionary of questions asked and their counts
            const questionEl = document.createElement('li');
            questionEl.textContent = key;
            questionEl.className = 'list-group-item'; 
            console.log(questionEl);
            trendingDisplay.appendChild(questionEl);
        }
    }
}

function displayUserList(users) {
    const activeDisplay = document.querySelector('.active-users');

    while (activeDisplay.firstChild) {
        activeDisplay.removeChild(activeDisplay.firstChild);
    }

    for (let user of activeUsers) {
        const userEl = document.createElement('li');
        userEl.textContent = user;
        userEl.className = 'list-group-item';
        activeDisplay.appendChild(userEl);
    }
}

configureWebSocket();

loadTrendingQuestions();
