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