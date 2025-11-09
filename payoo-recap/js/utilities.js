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

function showASectionById(id) {

    // hide all the sections first
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cashout-money-section').classList.add('hidden');
    document.getElementById('transfer-section').classList.add('hidden');
    document.getElementById('get-bonus-section').classList.add('hidden');

    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// exam tomorrow will work after finished my exam
