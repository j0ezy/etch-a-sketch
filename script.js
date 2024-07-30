const containerGrid = document.querySelector(".container")

for(let i = 0; i < 16; i++){
    const gridRow = document.createElement("div")
    gridRow.setAttribute("class", "gridRow")
    containerGrid.appendChild(gridRow)
    for(let j = 0; j < 16; j++){
        const gridBox = document.createElement("div")
        gridBox.setAttribute("class", "box")
        gridRow.appendChild(gridBox)
    }
}

const gridBox = document.querySelectorAll(".box")

for(let box of gridBox){
    box.addEventListener("mouseover", () =>{
        box.classList.toggle("onHover")
    })
}
