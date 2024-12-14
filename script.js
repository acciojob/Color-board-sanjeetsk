//your JS code here. If required.
const container = document.getElementById('colorBoard');

// create 800 boxes dynamically
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // add event listener for hover class
    square.addEventListener('mouseover', () => changeColor(square));
    container.appendChild(square);
}

function changeColor(element) {
    const randomColor = getRandomColor(); // Use the new function
    element.style.backgroundColor = randomColor;

    console.log(randomColor);
    //Add the active class for smooth fade out
    element.classList.add('active');

    //Remove active class after 1sec
    setTimeout(() => {
        element.classList.remove('active');
    }, 1000);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 128);
    const g = Math.floor(Math.random() * 128);
    const b = Math.floor(Math.random() * 128);
    return `rgb(${r}, ${g}, ${b})`;
}