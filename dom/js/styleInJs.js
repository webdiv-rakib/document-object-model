const sections = document.querySelectorAll('section');
// console.log(sections);
for (const section of sections) {
    console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '12px'
    section.style.padding = '16px'
    section.style.backgroundColor = 'lightgrey'
}

// const placeSection = document.getElementById('place-section');
// placeSection.style.backgroundColor = 'yellow'
// placeSection.classList.add('yellow-bg');
const placeSection = document.getElementById('place-section');
placeSection.classList.add('text-align','large-text');