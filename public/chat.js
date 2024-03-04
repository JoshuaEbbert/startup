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

function getTrendingQuestions() { // dictionary with counts per question
    return JSON.parse(localStorage.getItem('trendingQuestions')) ?? {};
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
        // pseudo database to store trending questions
        const trendingQuestions = getTrendingQuestions();
        if (trendingQuestions[message]) {
            trendingQuestions[message] += 1;
        } else {
            trendingQuestions[message] = 1;
        }
        localStorage.setItem('trendingQuestions', JSON.stringify(trendingQuestions));

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
    fetch('./config.json')
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