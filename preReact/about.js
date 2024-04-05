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

configureWebSocket();