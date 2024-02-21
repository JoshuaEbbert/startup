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

function getReply(message) { // placeholder function for when the chatbot is implemented
    const randomIndex = Math.floor(Math.random() * 20);
    const responses = [
        'Hello! How can I assist you with your test preparation today?',
        'I recommend starting your study sessions with a quick review of previously learned material.',
        'Practice tests are a great way to familiarize yourself with the test format.',
        'Remember to take regular breaks during your study sessions to avoid burnout.',
        'Flashcards can be a useful tool for memorizing key facts and definitions.',
        'Try to understand the concepts instead of just memorizing the facts.',
        'Group study can be effective if everyone is focused on the goal.',
        'Don\'t forget to get a good night\'s sleep before the test day.',
        'Eating a healthy meal before the test can help improve concentration.',
        'Try to stay calm and composed during the test. Anxiety can affect performance.',
        'If you\'re stuck on a question, move on to the next one and come back to it later.',
        'Make sure to read the questions carefully before answering.',
        'It\'s okay to guess if you\'re unsure about an answer. It\'s better than leaving it blank.',
        'Reviewing your answers before submitting the test can help catch any mistakes.',
        'Creating a study schedule can help manage your time effectively.',
        'Try to find a quiet and comfortable place to study.',
        'Using a variety of study materials can help reinforce learning.',
        'Remember, it\'s okay to ask for help if you\'re struggling with a topic.',
        'Stay positive and believe in your ability to do well on the test.',
        'Good luck with your test preparation!'
      ];

    text = responses[randomIndex]; 
    messageDict = {'type': 'replies', 'text': text};
    const chatHistory = getChatHistory();
    chatHistory.push(messageDict);
    const key = getUsername().replace(/\s/g, '') + 'ChatHistory';
    localStorage.setItem(key, JSON.stringify(chatHistory));
    const messageEl = document.createElement('li');
    messageEl.innerHTML = `<span>${messageDict['text']}</span>`;
    messageEl.className = messageDict['type'];
    chatDisplay.appendChild(messageEl);
    messageEl.scrollIntoView();
}