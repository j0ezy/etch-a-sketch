const containerGrid = document.querySelector(".container")
const sizeButton = document.querySelector(".btn")

function randomColor(){
    const randomR = Math.floor(Math.random() * 255)
    const randomG = Math.floor(Math.random() * 255)
    const randomB = Math.floor(Math.random() * 255)
    return `rgb(${randomR},${randomG},${randomB})`
}

sizeButton.addEventListener("click", () =>{

    // Remove the grid
    const gridRow = document.querySelectorAll(".gridRow")
    for(let row of gridRow){
        row.remove()
    }

    // Get input from user on grid Size and Generate grid
    while(true){
        let gridSize = +prompt("Enter the size of grid (max 100)")

        if(Number.isInteger(gridSize) && gridSize <= 100 && gridSize > 0){

            for(let i = 0; i < gridSize; i++){
                const gridRow = document.createElement("div")
                gridRow.setAttribute("class", "gridRow")
                containerGrid.appendChild(gridRow)
                for(let j = 0; j < gridSize; j++){
                    const gridBox = document.createElement("div")
                    gridBox.setAttribute("class", "box")
                    gridRow.appendChild(gridBox)
                }
            }
            break
        }
    }

    // Hover effect over box
    const gridBox = document.querySelectorAll(".box")
    for(let box of gridBox){
        let opacity = 10
        let color = randomColor()
        box.addEventListener("mouseenter", () =>{
            box.setAttribute("style", `background-color: ${color}; opacity: ${opacity}%`)
            opacity += 10
            if(opacity > 100){
                opacity = 100
            } 
        })
        box.addEventListener("click", () =>{
            box.style.removeProperty("background-color")
        })
    }
})




