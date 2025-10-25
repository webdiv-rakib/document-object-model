/**
 * Common Shared Functions here
 */
// console.log('Utilities loaded');

// function getInputFieldValueById() {
//     console.log('will get input value');
//     const addMoney = document.getElementById('add-money-input').value;
//     return addMoney;
// }

// function getInputValue(id) {
//     const inputValue = document.getElementById(id).value;
//     const inputNumber = parseFloat(inputValue);
//     return inputNumber;
// }
// function getCurrentBalance(id) {
//     const currentBalance = document.getElementById(id).innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);
//     return currentBalanceNumber;
// }

// Use common function to do

function getCurrentBalanceText(id) {
    const accountBalance = document.getElementById(id).innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
    return accountBalanceNumber;
}

function getInputFieldValue(id) {
    const addMoney = document.getElementById(id).value;
    const addMoneyNumber = parseFloat(addMoney);
    return addMoneyNumber;
}

function getInputPinCode(id) {
    const pinCode = document.getElementById(id).value;
    return pinCode;
}
