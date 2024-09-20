document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful! Redirecting to quiz...');
            window.location.href = 'quiz.html';  // Redirect to quiz page
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(err => {
        console.error('Error:', err);
        alert('An error occurred during login.');
    });
});
