console.log('Append JS')
// 1. where to add
const placesList = document.getElementById('place-list');

//2. what to be added 
const li = document.createElement('li');
li.innerText = 'Cox-bazar';

// 3. add the child
placesList.appendChild(li);

// -------Add full section--------
// 1. where to add
const mainContainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Kacchi';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Morog Polaw';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);
// will practice others soon
// just busy with daily life
// will start working from today
// please give me some times than i will rock everyone
// today we will travel to sylhet so busy cant code today
// will start coding tomorrow
// today i just return form tour and will be start working from today
// sorry for the late


// -------------Practice------------------
// 1. where to be added
const mainContainer2 = document.getElementById('main-container');

// 2. what to be added
const section2 = document.createElement('section');
const h2 = document.createElement('h1');
h2.innerText = 'Currently Visited Location';
section2.appendChild(h2);

const ul2 = document.createElement('ul');

const li4 = document.createElement('li');
li4.innerText = 'Sylhet';
ul2.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'Bichanakandi';
ul2.appendChild(li5);

const li6 = document.createElement('li');
li6.innerText = 'Pantomai';
ul2.appendChild(li6);

const li7 = document.createElement('li');
li7.innerText = 'Jaflong';
ul2.appendChild(li7);

section2.appendChild(ul2);
mainContainer2.appendChild(section2);

