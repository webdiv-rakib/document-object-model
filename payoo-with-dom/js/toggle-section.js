document.getElementById('add-money').addEventListener('click', function () {
    const showAddMoneySection = document.getElementById('add-money-section');
    const showCashOutSection = document.getElementById('cashout-money-section');
    const showTransferMoneySection = document.getElementById('transfer-section');
    showAddMoneySection.classList.remove('hidden');
    showCashOutSection.classList.add('hidden');
    showTransferMoneySection.classList.add('hidden');
})
document.getElementById('cash-out').addEventListener('click', function () {
    const showCashOutSection = document.getElementById('cashout-money-section');
    const showAddMoneySection = document.getElementById('add-money-section');
    const showTransferMoneySection = document.getElementById('transfer-section');
    showCashOutSection.classList.remove('hidden');
    showAddMoneySection.classList.add('hidden');
    showTransferMoneySection.classList.add('hidden');
})

document.getElementById('transfer-money').addEventListener('click',function(){
    const showCashOutSection = document.getElementById('cashout-money-section');
    const showAddMoneySection = document.getElementById('add-money-section');
    const showTransferMoneySection = document.getElementById('transfer-section');
    showCashOutSection.classList.add('hidden');
    showAddMoneySection.classList.add('hidden');
    showTransferMoneySection.classList.remove('hidden');
})