// <<<===================================>>>>>
document.getElementById('btn-cashout-money').addEventListener('click', function (event) {
    event.preventDefault();
    const currentBalance = getCurrentBalanceText('current-balance');
    const cashOutAmount = getInputFieldValue('cashout-amount');
    const cashOutPin = getInputPinCode('cashout-pin');
    if (cashOutPin === '12345') {
        const newBalance = currentBalance - cashOutAmount;
        document.getElementById('current-balance').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = `Cash-out amount: ${cashOutAmount} Tk, Current Balance: ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert('Something went wrong');
    }
})
