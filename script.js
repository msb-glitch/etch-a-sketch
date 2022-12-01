const grid = document.querySelector('.grid');

let bgColor = 'green';

let gridDimension = 17; // doesn't display right at 2 or lower; 19 or higher
let gridWidth = grid.offsetWidth;
let gridHeight = grid.offsetHeight;

// set up grid box size
// add correct number of boxes to grid in row and column

for (let columnCount = 0; columnCount < gridDimension; columnCount++) {
    for (let rowCount = 0; rowCount < gridDimension; rowCount++) {
        grid.appendChild(createGridBox((gridWidth) / (gridDimension ), rowCount + 1)); 
        
    }
}

function createGridBox(size, number) { //add number to have box count in box
    const newBox = document.createElement('div');
    newBox.className = 'gridbox';
    newBox.style.width = `${size - 2}px`;
    newBox.style.height = `${size - 2}px`;
    if (number){
        newBox.textContent = number;
    }
    return newBox;
}

const gridBox = document.querySelectorAll('.gridbox'); // get all boxes in the grid

gridBox.forEach(box => {
    box.addEventListener('mouseover', () =>{
        box.style.backgroundColor = bgColor;
    })
})



//test info

document.querySelector('.gridwidth').textContent = gridWidth;

document.querySelector('.gridheight').textContent = gridHeight;

let gridBoxWidth = document.querySelector('.gridbox').offsetWidth;
document.querySelector('.gridboxwidth').textContent = gridBoxWidth;
let gridBoxHeight = document.querySelector('.gridbox').offsetHeight;
document.querySelector('.gridboxheight').textContent = gridBoxHeight;