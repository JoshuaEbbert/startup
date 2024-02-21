const trendingDisplay = document.querySelector('.trending');
let questions = getTrendingQuestions();
questions = Object.keys(questions).sort((a, b) => questions[b] - questions[a]).slice(0, 5);

for (let key of questions) { // returns a dictionary of questions asked and their counts
    const questionEl = document.createElement('li');
    questionEl.textContent = key;
    questionEl.className = 'list-group-item'; 
    console.log(questionEl);
    trendingDisplay.appendChild(questionEl);
}

// Placeholder code for web socket implementation
const activeDisplay = document.querySelector('.active-users');

const noUsers = document.createElement('li');
noUsers.textContent = 'No active users';
noUsers.className = 'list-group-item';
activeDisplay.appendChild(noUsers);

const possibleUsers = ['Kate Strong', 'Josh Ebbert', 'Dr. Jensen', 'Unnamed TA', 'Ur Mom', 'Becky Strong', 'Charlie the dog'];
setInterval(() => {
    while (activeDisplay.firstChild) {
        activeDisplay.removeChild(activeDisplay.firstChild);
    }

    activeUsers = new Set();
    for(let i = 0; i < Math.floor(Math.random() * 6) + 1; i++) {
        activeUsers.add(possibleUsers[Math.floor(Math.random() * possibleUsers.length)]);
    }

    for (let user of activeUsers) {
        const userEl = document.createElement('li');
        userEl.textContent = user;
        userEl.className = 'list-group-item';
        activeDisplay.appendChild(userEl);
    }
}, 10000);

function getTrendingQuestions() { // dictionary with counts per question. Placeholder for the database
    return JSON.parse(localStorage.getItem('trendingQuestions')) ?? {"No questions currently trending": 0};
}