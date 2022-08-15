const grid = document.getElementById('grid');

const makeGrid = num => {
    grid.innerHTML = '';

    for (let i = 0; i < num * num; i++) {
        if (num > 100) num = 100;

        const item = document.createElement('div');

        item.classList.add('item');

        item.addEventListener('mouseenter', () => {
            item.style.background = 'black';
        });

        grid.appendChild(item);
        grid.style.gridTemplateColumns = `repeat(${num}, 2fr)`;
        grid.style.gridTemplateRows = `repeat(${num}, 2fr)`;
    }
}

const removeBorders = () => {
    const items = document.getElementsByClassName('item');

    for (const item of items) {
        item.setAttribute('style', 'border: none')
    }

    // console.log(items);
}

const changeGrid = () => {
    const num = prompt('Number');

    makeGrid(num)
}

makeGrid(16);
