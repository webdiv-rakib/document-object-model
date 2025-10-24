/**
 * Common Shared Functions here
 */
// console.log('Utilities loaded');

// function getInputFieldValueById() {
//     console.log('will get input value');
//     const addMoney = document.getElementById('add-money-input').value;
//     return addMoney;
// }

function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}