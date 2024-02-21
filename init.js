const playerNameEl = document.querySelector('.username-display');
playerNameEl.textContent = "User: " + this.getUsername();

function getUsername() {
    return localStorage.getItem('username') ?? 'No username provided';
}