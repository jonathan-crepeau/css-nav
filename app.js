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



// SECTION - Event Listener Example: Change Background Color w/ Event Type 'focus' & 'blur', 'mouseover' & 'mouseout':

// const btn = document.querySelector('button');

// function changeColor() {
//     const randomColor = `rgb(${rgbValues()}, ${rgbValues()}, ${rgbValues()})`;
//     document.body.style.backgroundColor = randomColor;
// }

// function rgbValues() {
//     return Math.floor(Math.random() * (255 - 0 + 1) + 0);
// }

// btn.addEventListener('mouseout', changeColor);



// SECTION - Remove Listeners

const controller = new AbortController();

btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const randomColor = `rgb(${rgbValues()}, ${rgbValues()}, ${rgbValues()})`;
    document.body.style.backgroundColor = randomColor;
}, { signal: controller.signal });

function rgbValues() {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
}

console.log('end it!');
controller.abort();