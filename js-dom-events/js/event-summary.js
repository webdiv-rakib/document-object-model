console.log('JS Event Summary');
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

document.getElementById('green').addEventListener('click', function green() {
    document.body.style.backgroundColor = 'green';
})
document.getElementById('white').addEventListener('click', function green() {
    document.body.style.backgroundColor = 'white';
})

// --------------------------
function handleOnClick() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Button Clicked';
}

// -------------------------
document.getElementById('final-option').addEventListener('click', function () {
    const handlerStatus2 = document.getElementById('event-listener');
    handlerStatus2.innerText = 'Add Event Listener';
})

// ------------------------
document.getElementById('btn-update').addEventListener('click', function () {
    // console.log('Update button clicked');
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const p = document.getElementById('input-text');
    p.innerText = inputText;
    inputField.value = '';
})