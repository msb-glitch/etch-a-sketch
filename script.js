const grid = document.querySelector('.grid');
let gridBox = [];
let bgColor = '#00b4d8';
const bodyBackgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
let gridDimension = 20; // doesn't display right at 2 or lower; 19 or higher
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;

// set up grid box size
// add correct number of boxes to grid in row and column

createGridBox(gridDimension)

function createGridBox(size, number) { //add number to have box count in box
    
    grid.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
    grid.style.gridTemplateRows = (`repeat(${size}, 1fr`);
    for (let i = 0; i < size * size; i++){
        gridBox[i] = document.createElement('div')
        gridBox[i].classList.add('gridbox');
        gridBox[i].textContent = i;
        grid.appendChild(gridBox[i]);
        
    }
    
}

//const gridBox = document.querySelectorAll('.gridbox'); // get all boxes in the grid

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

