console.log('This is separate JS file');

// System-2 (option-2) [we will use this most]
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// System-3 (option-3)
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// System-3 another [will use rare]
const makeYellowButton = document.getElementById('make-yellow');
makeYellowButton.onclick = function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

// System-4 (option-4)
const makeOrangeButton = document.getElementById('make-orange');
makeOrangeButton.addEventListener('click', makeOrange);
function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}
// System-4 another
const makeIndigoButton = document.getElementById('make-indigo');
makeIndigoButton.addEventListener('click', function makeIndigo() {
    document.body.style.backgroundColor = 'indigo';
})

// System-5 final [very important will use most of the time]
document.getElementById('make-violet').addEventListener('click', function () {
    document.body.style.backgroundColor = 'violet';
})
