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
console.log('add money loaded');
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('add money button clicked');
    // const addMoney = document.getElementById('add-money-input').value;
    // const addMoneyNumber = parseFloat(addMoney);
})