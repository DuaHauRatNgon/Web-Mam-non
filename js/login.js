document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('Login successful');
            window.location.href = '/index.html'; // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
        } else {
            const data = await response.json();
            alert(`Login failed: ${data.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login');
    }
});