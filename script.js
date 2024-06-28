const container = document.querySelector("#container");

for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let i = 1; i <= 16; i++) {
        const oner = document.createElement("div");
        oner.classList.add("oner");
        row.appendChild(oner);
    }
}

const divs = document.querySelectorAll(".oner");
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "yellow";   
    })
})
