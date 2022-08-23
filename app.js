// console.log("Fear is the mind killer.");

// SECTION - Event Listener Example: Change Background Color:
// const btn = document.querySelector('button');

// function changeColor() {
//     const randomColor = `rgb(${rgbValues()}, ${rgbValues()}, ${rgbValues()})`;
//     document.body.style.backgroundColor = randomColor;
// }

// function rgbValues() {
//     return Math.floor(Math.random() * (255 - 0 + 1) + 0);
// }

// btn.addEventListener('click', changeColor);



// SECTION - Event Listener Example: Change Background Color:
const btn = document.querySelector('button');

function changeColor() {
    const randomColor = `rgb(${rgbValues()}, ${rgbValues()}, ${rgbValues()})`;
    document.body.style.backgroundColor = randomColor;
}

function rgbValues() {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
}

btn.addEventListener('click', changeColor);


