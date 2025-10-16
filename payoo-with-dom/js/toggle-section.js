document.getElementById('add-money').addEventListener('click', function () {
    const showAddMoneySection = document.getElementById('add-money-section')
    showAddMoneySection.classList.toggle('hidden');
})
document.getElementById('cash-out').addEventListener('click', function () {
    const showCashOutSection = document.getElementById('cashout-money-section');
    showCashOutSection.classList.toggle('hidden');
})