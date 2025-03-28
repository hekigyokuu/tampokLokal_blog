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