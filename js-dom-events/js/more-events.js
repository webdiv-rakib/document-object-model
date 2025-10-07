document.getElementById('btn-more').addEventListener('mouseenter', function () {
    console.log('Events button clicked');
})
document.getElementById('btn-more').addEventListener('mousemove', function () {
    console.log('Events button clicked');
})

document.getElementById('text-field').addEventListener('focus', function () {
    console.log('Event triggered inside the input field');
})

document.getElementById('text-field1').addEventListener('blur', function () {
    console.log('Event triggered inside the input field');
})

document.getElementById('text-field').addEventListener('keydown', function (event) {
    console.log(event.target.value)
})

document.getElementById('text-field').addEventListener('keypress', function (event) {
    console.log(event.target.value)
})

document.getElementById('text-field').addEventListener('keyup', function (event) {
    console.log(event.target.value)
})