const grid = document.querySelector('.grid');
const gridBox = document.createElement('div')
gridBox.className = 'gridbox';

let gridDimension = 16;
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;

// set up grid box size
// add correct number of boxes to grid in row and column

for (let columnCount = 0; columnCount < gridDimension; columnCount++) {
    for (let rowCount = 0; rowCount < gridDimension; rowCount++) {
        grid.appendChild(createGridBox(gridWidth / gridDimension));
    }
}

function createGridBox(size){
    const gridBox = document.createElement('div')
    gridBox.className = 'gridbox';
    gridBox.style.width= `${size}px`;
    gridBox.style.height= `${size}px`;

    return gridBox;
}








//test info

document.querySelector('.gridwidth').textContent = gridWidth;

document.querySelector('.gridheight').textContent = gridHeight;

let gridBoxWidth = document.querySelector('.gridbox').offsetWidth;
document.querySelector('.gridboxwidth').textContent = gridBoxWidth;
let gridBoxHeight = document.querySelector('.gridbox').offsetHeight;
document.querySelector('.gridboxheight').textContent = gridBoxHeight;