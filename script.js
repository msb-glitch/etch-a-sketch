const grid = document.querySelector('.grid');
let gridBox = [];
let bgColor = '#00b4d8';
let lastPickedColor = bgColor;
const bodyBackgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
const gridSlider = document.querySelector("input[name=gridSlider]");
let gridDimension = gridSlider.value;
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;
let colorMode = document.querySelector('input[name=colorModeRadio]:checked').value;
const eraseMode = document.querySelector('input[name=erasemodecheckbox');
const startOver = document.querySelector('.startover button');




// set up grid box size
// add correct number of boxes to grid in row and column

createGridBox(gridDimension);


function createGridBox(size) { 
    removeGridBoxes();
    grid.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
    grid.style.gridTemplateRows = (`repeat(${size}, 1fr`);
    for (let i = 0; i < size * size; i++) {
        gridBox[i] = document.createElement('div')
        gridBox[i].classList.add('gridbox');

        grid.appendChild(gridBox[i]);

    }
    changeColorMode(colorMode, '');

}

function changeColorMode(newEvent, oldEvent) {
    gridBox.forEach(box => {
        box.removeEventListener(oldEvent, fillSquare);
        box.addEventListener(newEvent, fillSquare);
    })
}

function removeGridBoxes() {
    gridBox.forEach(box => {
        box.remove();
    })

}

function fillSquare() {
    this.style.backgroundColor = bgColor;
}

gridSlider.addEventListener('change', () => {
    gridDimension = gridSlider.value;
    createGridBox(gridDimension);
    document.querySelector('.slider output').textContent = `Grid size: ${gridSlider.value} x ${gridSlider.value}`;

    if (gridSlider.value > 25) {

        gridBox.forEach(el => {
            el.style.margin = '0.5px';
        });


    }
    else {
        gridBox.forEach(el => {
            el.style.margin = '2px';
        });
    }
});

eraseMode.addEventListener('change', () => {
    if (eraseMode.checked) {
        bgColor = bodyBackgroundColor;
    }
    else {
        bgColor = lastPickedColor;
    }
})

modePicker.addEventListener('click', () => {
    oldColorMode = colorMode;
    newColorMode = document.querySelector('input[name=colorModeRadio]:checked').value;
    changeColorMode(newColorMode, oldColorMode);
    colorMode = newColorMode;

});

startOver.addEventListener('click', () => {

    createGridBox(gridDimension);
    eraseMode.checked = false;
    bgColor = lastPickedColor;
    console.log('clicked');
})



//things to add



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
    lastPickedColor = event.detail.color;
    eraseMode.checked = false;
});

