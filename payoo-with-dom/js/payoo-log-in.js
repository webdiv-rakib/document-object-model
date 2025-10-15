document.getElementById('log-in-btn').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('log in button clicked');
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('password').value;

    if (phoneNumber === '5' && pinNumber === '12345') {
        console.log('You are logged in')

        //to open in same tab
        window.location.href = 'home.html'; 

        // to open in new tab
        // window.open('home.html', '_blank');
    }
    else {
        alert('Wrong phone number or pin code');
    }
})