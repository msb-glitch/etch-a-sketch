const grid = document.querySelector('.grid');



let gridDimension = 18; // doesn't display right at numbers lower than ~8
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;

// set up grid box size
// add correct number of boxes to grid in row and column

for (let columnCount = 0; columnCount < gridDimension; columnCount++) {
    for (let rowCount = 0; rowCount < gridDimension; rowCount++) {
        grid.appendChild(createGridBox((gridWidth) / (gridDimension + 1))); // figure out why + 1 makes the right grid size
    }
}

function createGridBox(size) {
    const newBox = document.createElement('div');
    newBox.className = 'gridbox';
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;

    return newBox;
}

const gridBox = document.querySelectorAll('.gridbox'); // get all boxes in the grid

gridBox.forEach(box => {
    box.addEventListener('mouseover', () =>{
        box.classList.add('filledin');
    })
})



//test info

document.querySelector('.gridwidth').textContent = gridWidth;

document.querySelector('.gridheight').textContent = gridHeight;

let gridBoxWidth = document.querySelector('.gridbox').offsetWidth;
document.querySelector('.gridboxwidth').textContent = gridBoxWidth;
let gridBoxHeight = document.querySelector('.gridbox').offsetHeight;
document.querySelector('.gridboxheight').textContent = gridBoxHeight;