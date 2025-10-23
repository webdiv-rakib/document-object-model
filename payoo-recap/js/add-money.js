document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = document.getElementById('add-money-input').value;
    const pinNumber = document.getElementById('pin-number-input').value;
    console.log(addMoney, pinNumber);
})