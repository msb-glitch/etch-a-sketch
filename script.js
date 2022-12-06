const grid = document.querySelector('.grid');
let gridBox = [];
const rainbowColors = ['#ff0000', '#ff5300', '#ffa500', '#ffd200', '#ffff00', '#80c000', '#008000', '#004080', '#0000ff', '#2600c1', '#4b0082', 'pink', 'white', 'black'];
let bgColor = '#ff0000';
let lastPickedColor = bgColor;
const bodyBackgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
const gridSlider = document.querySelector("input[name=gridSlider]");
let gridDimension = gridSlider.value;
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;
let colorMode = document.querySelector('input[name=colorModeRadio]:checked').value;
const eraseMode = document.querySelector('input[name=erasemodecheckbox');
const startOver = document.querySelector('.startover button');

let rainbowMode = true;
let colorIndex = 0;

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
    if (rainbowMode) {
        while (colorIndex < rainbowColors.length) {
            console.log(rainbowColors[colorIndex]);
            this.style.backgroundColor = rainbowColors[colorIndex];
            colorIndex++;
            if (colorIndex === rainbowColors.length) {
                colorIndex = 0;
            }
            break;
        }
    }
    else {
        this.style.backgroundColor = bgColor;
    }
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
    swatches: rainbowColors,
    theme: 'polaroid',
    defaultColor: `${bgColor}`,
    swatchesOnly: true

});




document.addEventListener('coloris:pick', event => {
    bgColor = event.detail.color;
    lastPickedColor = event.detail.color;
    eraseMode.checked = false;
});

