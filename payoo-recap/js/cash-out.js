// document.getElementById('btn-cashout-money').addEventListener('click', function (event) {
//     event.preventDefault();
//     const amountToAdd = getInputValue('cashout-amount');
//     const pinNumber = getInputValue('cashout-pin');
//     if (pinNumber === '12345') {
//         const currentBalance = getCurrentBalance('current-balance');
//         const newBalance = currentBalance - amountToAdd;
//         console.log(newBalance);
//         document.getElementById('current-balance').innerText = newBalance;
//     }
//     else {
//         alert('Something went wrong')
//     }
// })
// <<<===================================>>>>>
document.getElementById('btn-cashout-money').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = getInputFieldValue('cashout-amount');
    const cashOutPin = getInputPinCode('cashout-pin');
    
})