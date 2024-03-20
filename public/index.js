async function authenticateCredentials(url) {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify({ username: username, password: password }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (response.ok) {
        localStorage.setItem('username', username);
        window.location.href = 'chat.html';
    } else {
        const body = await response.json();
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
    }
}

async function login() {
    authenticateCredentials('/api/auth/login');
}

async function create() {
    authenticateCredentials('/api/auth/create');
}