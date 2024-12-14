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
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    element.style.backgroundColor = randomColor;

    //Add the active class for smooth fade out
    element.classList.add('active');

    //Remove active class after 1sec
    setTimeout(() => {
        element.classList.remove('active');
    }, 1000);
}