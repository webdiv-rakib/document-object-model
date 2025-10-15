document.getElementById('log-in-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('log in button clicked');
    const phoneNumber = document.getElementById('phone-number').value;
    // console.log(phoneNumber);
    const pinCode = document.getElementById('password').value;
    // console.log(pinCode);
    if (phoneNumber === '5' && pinCode === '1234') {
        console.log('Your are logged in');
    }
    else {
        alert('Wrong phone or pin');
    }
})