document.getElementById('add-money').addEventListener('click', function () {
    const showAddMoneySection = document.getElementById('add-money-section');
    const showCashOutSection = document.getElementById('cashout-money-section');
    showAddMoneySection.classList.remove('hidden');
    showCashOutSection.classList.add('hidden');
})
document.getElementById('cash-out').addEventListener('click', function () {
    const showCashOutSection = document.getElementById('cashout-money-section');
    const showAddMoneySection = document.getElementById('add-money-section');
    showCashOutSection.classList.remove('hidden');
    showAddMoneySection.classList.add('hidden');
})