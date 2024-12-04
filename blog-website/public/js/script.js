document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please fill in both fields.';
    } else {
        errorMessage.style.display = 'none';

        // Simulate login (you can replace this with real authentication logic)
        if (username === 'admin' && password === 'password') {
            // Redirect to the after-login page
            window.location.href = 'C:\Users\Sagar\Desktop\after-login-html\after-login-html';  
        } else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Invalid credentials. Please try again.';
        }
    }
});
