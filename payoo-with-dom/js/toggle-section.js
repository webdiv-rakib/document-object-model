document.getElementById('add-money').addEventListener('click', function () {
    const showAddMoneySection = document.getElementById('add-money-section');
    const showCashOutSection = document.getElementById('cashout-money-section');
    const showTransferMoneySection = document.getElementById('transfer-section');
    const showGetBonusSection = document.getElementById('get-bonus-section');
    const showPayBillSection = document.getElementById('pay-bill-section');
    const showTransactionHistory = document.getElementById('transaction-section');
    showTransactionHistory.classList.add('hidden');
    showAddMoneySection.classList.remove('hidden');
    showCashOutSection.classList.add('hidden');
    showTransferMoneySection.classList.add('hidden');
    showGetBonusSection.classList.add('hidden');
    showPayBillSection.classList.add('hidden');

})

document.getElementById('cash-out').addEventListener('click', function () {
    const showCashOutSection = document.getElementById('cashout-money-section');
    const showAddMoneySection = document.getElementById('add-money-section');
    const showTransferMoneySection = document.getElementById('transfer-section');
    const showGetBonusSection = document.getElementById('get-bonus-section');
    const showPayBillSection = document.getElementById('pay-bill-section');
    const showTransactionHistory = document.getElementById('transaction-section');
    showTransactionHistory.classList.add('hidden');
    showCashOutSection.classList.remove('hidden');
    showAddMoneySection.classList.add('hidden');
    showTransferMoneySection.classList.add('hidden');
    showGetBonusSection.classList.add('hidden');
    showPayBillSection.classList.add('hidden');
})

document.getElementById('transfer-money').addEventListener('click', function () {
    const showCashOutSection = document.getElementById('cashout-money-section');
    const showAddMoneySection = document.getElementById('add-money-section');
    const showTransferMoneySection = document.getElementById('transfer-section');
    const showGetBonusSection = document.getElementById('get-bonus-section');
    const showPayBillSection = document.getElementById('pay-bill-section');
    const showTransactionHistory = document.getElementById('transaction-section');
    showTransactionHistory.classList.add('hidden');
    showCashOutSection.classList.add('hidden');
    showAddMoneySection.classList.add('hidden');
    showTransferMoneySection.classList.remove('hidden');
    showGetBonusSection.classList.add('hidden');
    showPayBillSection.classList.add('hidden');
})

document.getElementById('get-bonus').addEventListener('click', function () {
    const showGetBonusSection = document.getElementById('get-bonus-section');
    const showCashOutSection = document.getElementById('cashout-money-section');
    const showAddMoneySection = document.getElementById('add-money-section');
    const showTransferMoneySection = document.getElementById('transfer-section');
    const showPayBillSection = document.getElementById('pay-bill-section');
    const showTransactionHistory = document.getElementById('transaction-section');
    showTransactionHistory.classList.add('hidden');
    showGetBonusSection.classList.remove('hidden');
    showCashOutSection.classList.add('hidden');
    showAddMoneySection.classList.add('hidden');
    showTransferMoneySection.classList.add('hidden');
    showPayBillSection.classList.add('hidden');

})

document.getElementById('pay-now').addEventListener('click', function () {
    const showPayBillSection = document.getElementById('pay-bill-section');
    const showGetBonusSection = document.getElementById('get-bonus-section');
    const showCashOutSection = document.getElementById('cashout-money-section');
    const showAddMoneySection = document.getElementById('add-money-section');
    const showTransferMoneySection = document.getElementById('transfer-section');
    const showTransactionHistory = document.getElementById('transaction-section');
    showTransactionHistory.classList.add('hidden');
    showPayBillSection.classList.remove('hidden');
    showGetBonusSection.classList.add('hidden');
    showCashOutSection.classList.add('hidden');
    showAddMoneySection.classList.add('hidden');
    showTransferMoneySection.classList.add('hidden');

})

document.getElementById('transaction-history').addEventListener('click', function () {
    const showTransactionHistory = document.getElementById('transaction-section');
    const showAddMoneySection = document.getElementById('add-money-section');
    const showCashOutSection = document.getElementById('cashout-money-section');
    const showTransferMoneySection = document.getElementById('transfer-section');
    const showGetBonusSection = document.getElementById('get-bonus-section');
    const showPayBillSection = document.getElementById('pay-bill-section');
    showTransactionHistory.classList.remove('hidden');
    showAddMoneySection.classList.add('hidden');
    showCashOutSection.classList.add('hidden');
    showTransferMoneySection.classList.add('hidden');
    showGetBonusSection.classList.add('hidden');
    showPayBillSection.classList.add('hidden');
})