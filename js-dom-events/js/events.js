console.log('This is separate JS file');

// System-2 (option-2)
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// System-3 (option-3)
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// System-4 (option-4)
const makeYellowButton = document.getElementById('make-yellow');
makeYellowButton.onclick = function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}