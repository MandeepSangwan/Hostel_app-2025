document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Access Denied: Missing Credentials');
        return;
    }

    alert(`Welcome, ${username}! Access Granted.`);
});
