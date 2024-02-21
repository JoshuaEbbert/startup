const chatDisplay = document.querySelector('.messages-list');
for (messageDict in getChatHistory()) { // chat history is a list of dictionaries of format {'type': 'replies' or 'sent', 'text': 'message'}
    const messageEl = document.createElement('li');
    messageEl.textContent = messageDict['text'];
    messageEl.className = messageDict['type']; // set the class based on the type
    chatDisplay.appendChild(messageEl);
}

function getChatHistory() {
    const key = getUsername().replace(/\s/g, '') + 'ChatHistory' // chat history keys take the form of 'usernameChatHistory'
    return JSON.parse(localStorage.getItem(key)) ?? [{'type': 'replies', 'text': 'Hello. How can I help you with your test preparation today?'}];
}

function getUsername() {
    return localStorage.getItem('username') ?? 'No username provided';
}