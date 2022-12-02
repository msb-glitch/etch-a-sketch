const grid = document.querySelector('.grid');

let bgColor = '#00b4d8';
const bodyBackgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
let gridDimension = 18; // doesn't display right at 2 or lower; 19 or higher
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;

// set up grid box size
// add correct number of boxes to grid in row and column

for (let columnCount = 0; columnCount < gridDimension; columnCount++) {
    for (let rowCount = 0; rowCount < gridDimension; rowCount++) {
        grid.appendChild(createGridBox((gridWidth) / (gridDimension), rowCount + 1));

    }
}

function createGridBox(size, number) { //add number to have box count in box
    const newBox = document.createElement('div');
    newBox.className = 'gridbox';
    newBox.style.width = `${size - 2}px`;
    newBox.style.height = `${size - 2}px`;
    if (number) {
        newBox.textContent = number;
    }
    return newBox;
}

const gridBox = document.querySelectorAll('.gridbox'); // get all boxes in the grid

//things to add
//  click mode
//  or click to erase

//  rainbow mode
//  shimmering rainbow

gridBox.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = bgColor;
    })
})

/** Default configuration **/

Coloris({
    el: '.coloris',
    swatches: [
        '#264653',
        '#2a9d8f',
        '#e9c46a',
        '#f4a261',
        '#e76f51',
        '#d62828',
        '#023e8a',
        '#0077b6',
        '#0096c7',
        '#00b4d8',
        `${bodyBackgroundColor}`,
    ],
    theme: 'polaroid',
    swatchesOnly: true

});




document.addEventListener('coloris:pick', event => {
    bgColor = event.detail.color;
});

//test info

document.querySelector('.gridwidth').textContent = gridWidth;

document.querySelector('.gridheight').textContent = gridHeight;

let gridBoxWidth = document.querySelector('.gridbox').offsetWidth;
document.querySelector('.gridboxwidth').textContent = gridBoxWidth;
let gridBoxHeight = document.querySelector('.gridbox').offsetHeight;
document.querySelector('.gridboxheight').textContent = gridBoxHeight;