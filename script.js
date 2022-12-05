const grid = document.querySelector('.grid');
let gridBox = [];
let bgColor = '#00b4d8';
const bodyBackgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
let gridDimension = document.querySelector("input[name=gridSlider]").value;
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;
let colorMode = document.querySelector('input[name=colorModeRadio]:checked').value;



// set up grid box size
// add correct number of boxes to grid in row and column

createGridBox(gridDimension);
changeColorMode(colorMode, '');
function createGridBox(size) { //add number to have box count in box

    grid.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
    grid.style.gridTemplateRows = (`repeat(${size}, 1fr`);
    for (let i = 0; i < size * size; i++) {
        gridBox[i] = document.createElement('div')
        gridBox[i].classList.add('gridbox');

        grid.appendChild(gridBox[i]);

    }

}
function changeColorMode(newEvent, oldEvent) { 
    gridBox.forEach(box => {
        box.removeEventListener(oldEvent, fillSquare);
        box.addEventListener(newEvent, fillSquare);
    })
}

function fillSquare(){
    this.style.backgroundColor = bgColor;
}

modePicker.addEventListener('click', () => {
    oldColorMode = colorMode;
    newColorMode = document.querySelector('input[name=colorModeRadio]:checked').value;
    changeColorMode(newColorMode, oldColorMode);
    colorMode = newColorMode;

});

//things to add
//  click mode
//  or click to erase

//  rainbow mode
//  shimmering rainbow



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
    defaultColor: `${bgColor}`,
    swatchesOnly: true

});




document.addEventListener('coloris:pick', event => {
    bgColor = event.detail.color;
});

