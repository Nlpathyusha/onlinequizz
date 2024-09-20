document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Send form data to server
    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful! Redirecting to login...');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('Registration failed: ' + data.message);
        }
    })
    .catch(err => {
        console.error('Error:', err);
        alert('An error occurred during registration.');
    });
});
