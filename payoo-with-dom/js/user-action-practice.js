// Add money user action
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById('add-money-input').value;
    const pinNumber = document.getElementById('pin-number-input').value;
    if (pinNumber === '12345') {
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const inputNumber = parseFloat(inputAmount);
        const newBalance = balanceNumber + inputNumber;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else {
        alert('something went wrong');
    }
})

// Cash-out user action
document.getElementById('btn-cashout-money').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById('cashout-amount').value;
    const pinNumber = document.getElementById('cashout-pin').value;
    if (pinNumber === '12345') {
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const inputNumber = parseFloat(inputAmount);
        const newBalance = balanceNumber - inputNumber;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else {
        alert('Something went wrong');
    }

})

// Transfer money user action
document.getElementById('send-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const transferAmount = document.getElementById('send-amount').value;
    const transferPin = document.getElementById('send-pin').value;
    if (transferPin === '12345') {
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const inputNumber = parseFloat(transferAmount);
        const newBalance = balanceNumber - inputNumber;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else {
        alert('Something went wrong');
    }
})

// Pay Bill user action
document.getElementById('pay-now-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const payAmount = document.getElementById('pay-amount').value;
    const payPin = document.getElementById('pay-pin').value;
    if (payPin === '12345') {
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const inputNumber = parseFloat(payAmount);
        const newBalance = balanceNumber - inputNumber;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else {
        alert('Something went wrong');
    }
})