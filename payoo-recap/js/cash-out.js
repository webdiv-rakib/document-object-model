// <<<===================================>>>>>
document.getElementById('btn-cashout-money').addEventListener('click', function (event) {
    event.preventDefault();
    const currentBalance = getCurrentBalanceText('current-balance');
    const cashOutAmount = getInputFieldValue('cashout-amount');
    const cashOutPin = getInputPinCode('cashout-pin');

    if (isNaN(cashOutAmount)) {
        alert('Failed to cash out');
        return;
    }
    if (cashOutPin === '12345') {
        const newBalance = currentBalance - cashOutAmount;

        if (cashOutAmount > currentBalance) {
            alert('You do not have enough money to cash out');
            return;
        }
        document.getElementById('current-balance').innerText = newBalance;

        // const p = document.createElement('p');
        // p.innerText = `Cash-out amount: ${cashOutAmount} Tk, Current Balance: ${newBalance}`;
        // document.getElementById('transaction-container').appendChild(p);

        // add to transaction history
        const div = document.createElement('div');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOutAmount} withdraw. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('Something went wrong');
    }
})
