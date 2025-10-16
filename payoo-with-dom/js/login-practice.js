document.getElementById('log-in-btn').addEventListener('click', function () {
    const mobileNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('password').value;
    if (mobileNumber === '01794181719' && pinNumber === '12345') {
        window.location.href = 'home.html';
    }
    else {
        alert('Wrong phone number or pin');
    }
})