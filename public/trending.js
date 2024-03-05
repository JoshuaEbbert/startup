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
}

loadTrendingQuestions();