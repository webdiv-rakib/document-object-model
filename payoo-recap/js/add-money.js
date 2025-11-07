// ============Using Function to do this===============>>>>>
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAddMoney = getInputFieldValue('add-money-input')
    const accountBalance = getCurrentBalanceText('current-balance')
    const pinCode = getInputPinCode('pin-number-input');
    if (pinCode === '123') {
        const newBalance = accountBalance + inputAddMoney;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else {
        alert('Something went wrong');
    }
})
