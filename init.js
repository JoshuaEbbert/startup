const playerNameEl = document.querySelector('.username-display');
playerNameEl.textContent = "User: " + this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('username') ?? 'No username provided';
}