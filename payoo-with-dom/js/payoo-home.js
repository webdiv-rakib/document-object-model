document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money-input').value;
    console.log(addMoneyInput);
    const pinNumber = document.getElementById('pin-number-input').value;
    console.log(pinNumber);
})

// Extra Section below
document.getElementById('add-money').addEventListener('click', function () {
    const addMoneySection = document.getElementById('add-money-section');
    addMoneySection.classList.toggle('hidden');
})