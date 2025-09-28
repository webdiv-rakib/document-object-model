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
