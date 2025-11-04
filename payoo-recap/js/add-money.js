// document.getElementById('btn-add-money').addEventListener('click', function (event) {
//     event.preventDefault();
//     const addMoney = document.getElementById('add-money-input').value;
//     const pinNumber = document.getElementById('pin-number-input').value;
//     console.log(addMoney, pinNumber);

//     if (pinNumber === '123') {
//         const balance = document.getElementById('current-balance').innerText;
//         const addMoneyNumber = parseFloat(addMoney);
//         const balanceNumber = parseFloat(balance);
//         const newBalance = balanceNumber + addMoneyNumber;
//         document.getElementById('current-balance').innerText = newBalance;
//     }
//     else {
//         alert('Something went wrong');
//     }
// })
// console.log('add money loaded');

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
// add money section practice done
// will start working from today
// another useless day spend with out any work
// getting lazy day by day
// will start working after setting up all
// i dont know what to do now
// 1 by 1 day gone but i have not started yet