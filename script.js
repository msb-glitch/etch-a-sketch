const grid = document.querySelector('#grid');
const gridBox = '<div class="gridbox">&nbsp;</div>';

let gridDimension = 16;

// set up grid box size
// add correct number of boxes to grid in row and column

for (let columnCount = 0; columnCount < gridDimension; columnCount++) {
    for (let rowCount = 0; rowCount < gridDimension; rowCount++) {
        grid.innerHTML += gridBox;
    }
}