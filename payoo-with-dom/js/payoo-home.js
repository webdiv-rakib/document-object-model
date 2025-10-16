// Add Money Functionality
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

// Cash Out Functionality
document.getElementById('btn-cashout-money').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutInput = document.getElementById('cashout-amount').value;
    const pinNumber = document.getElementById('cashout-pin').value;
    if (pinNumber === '12345') {
        const currentBalance = document.getElementById('current-balance').innerText;
        const cashOutNumber = parseFloat(cashOutInput);
        const balanceNumber = parseFloat(currentBalance);
        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);
        document.getElementById('current-balance').innerText = newBalance;
    }
    else {
        alert('Something went wrong');
    }
})


// Extra Section below
// document.getElementById('add-money').addEventListener('click', function () {
//     const addMoneySection = document.getElementById('add-money-section');
//     addMoneySection.classList.remove('hidden');
//     addMoneySection.classList.add('hidden');
// })

// document.getElementById('cash-out').addEventListener('click', function () {
//     const cashOutSection = document.getElementById('cashout-money-section');
//     cashOutSection.classList.remove('hidden');
//     cashOutSection.classList.add('hidden');
// })

document.getElementById('add-money').addEventListener('click', function () {
    const addMoneySection = document.getElementById('add-money-section');
    const cashOutSection = document.getElementById('cashout-money-section');
    // Show Add Money section
    addMoneySection.classList.remove('hidden');
    // Hide Cash Out section
    cashOutSection.classList.add('hidden');
});

document.getElementById('cash-out').addEventListener('click', function () {
    const cashOutSection = document.getElementById('cashout-money-section');
    const addMoneySection = document.getElementById('add-money-section');

    // Show Cash Out section
    cashOutSection.classList.remove('hidden');
    // Hide Add Money section
    addMoneySection.classList.add('hidden');
});

