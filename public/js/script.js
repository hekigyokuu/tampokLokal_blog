document.addEventListener('keydown', event => {
    if (event.key.toLowerCase() === 'n') {
        window.location.href = document.getElementById('add').href;
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        window.location.href = '/';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blogForm');
    const usernameInput = document.getElementById('username');

    if (localStorage.getItem('username')) {
        usernameInput.value = localStorage.getItem('username');
    }

    form.addEventListener('submit', event => {
        event.preventDefault();

        const username = usernameInput.value;
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        if (username) {
            localStorage.setItem('username', username);
        }

        console.log('Blog Post Data:', { username, title, content });

        window.location.href = '/blogs';
    });
});