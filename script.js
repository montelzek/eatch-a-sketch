function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ''; 
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    const squareSize = 600 / size; 
    
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        container.appendChild(div);
    }

    const divs = document.querySelectorAll(".grid-item");
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)},
                                 ${Math.floor(Math.random() * 256)},
                                 ${Math.floor(Math.random() * 256)})`;
            div.style.backgroundColor = randomColor;
        })
    })
}

document.getElementById('resizeButton').addEventListener('click', () => {
    let size = prompt('Enter new grid size (max 100):');
    size = Math.min(size, 100); 
    createGrid(size);
});



