const grid = document.getElementById('grid');

const makeGrid = num => {
    grid.innerHTML = '';

    for (let i = 0; i < num * num; i++) {

        const item = document.createElement('div');
        item.classList.add('item');

        grid.appendChild(item);
        grid.style.gridTemplateColumns = `repeat(${num}, 2fr)`;
        grid.style.gridTemplateRows = `repeat(${num}, 2fr)`;
    }
}

const changeGrid = () => {
    const num = prompt('Number');

    makeGrid(num)
}

makeGrid(16);
