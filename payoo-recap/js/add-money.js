// ============Using Function to do this===============>>>>>
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAddMoney = getInputFieldValue('add-money-input')
    const accountBalance = getCurrentBalanceText('current-balance')
    const pinCode = getInputPinCode('pin-number-input');

    if (isNaN(inputAddMoney)) {
        alert('Failed to add money');
        return;
    }

    if (pinCode === '123') {
        const newBalance = accountBalance + inputAddMoney;
        document.getElementById('current-balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${inputAddMoney} Tk. Balance: ${newBalance}`;

        // should be a common function to show history
        document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert('Something went wrong');
    }
})
