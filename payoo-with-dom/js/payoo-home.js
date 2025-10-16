document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money-input').value;
    const pinNumber = document.getElementById('pin-number-input').value;
    if (pinNumber === '12345') {
        const currentBalance = document.getElementById('current-balance').innerText;
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(currentBalance);
        const updateBalance = addMoneyNumber + balanceNumber;
        document.getElementById('current-balance').innerText = updateBalance;
    }
    else {
        alert('Something went wrong');
    }
})

// Extra Section below
document.getElementById('add-money').addEventListener('click', function () {
    const addMoneySection = document.getElementById('add-money-section');
    addMoneySection.classList.toggle('hidden');
})