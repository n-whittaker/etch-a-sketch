let container = document.querySelector(".squares-container"); 
let containerStyle = window.getComputedStyle(container);
let containerWidth = containerStyle.width; 
let containerWidthNum = parseInt(containerWidth.substring(0, 3), 10); // Getting width of container as a usable number
let clearBtn = document.querySelector(".clear");
let resolutionBtn = document.querySelector(".resolution");



resetGrid(16);

clearBtn.addEventListener('click', () => { 
    let squares = document.querySelectorAll(".square");

    for (let i = 0; i < squares.length; i++) { // for every square in the node list 'squares', turn that square black when it's hovered over
        squares[i].style.backgroundColor = 'white';
    }
})

resolutionBtn.addEventListener('click', () => { resetGrid(prompt("how many squares per side should there be?")); })


function resetGrid(squaresPerSide) {
    currentSquares = squaresPerSide;
    while (container.firstChild) {   // Remove all previously created squares
        container.removeChild(container.firstChild);
    }

    let squaresTotal = squaresPerSide ** 1;
    let squareSize = (containerWidthNum - 2) / squaresTotal; // making squares fit into box (-2 is a quick fix, wouldn't work without it idk why)


    for (let i = 0; i < squaresTotal ** 2 ; i++) { // Make amount of squares requested
        let drawSquare = document.createElement("div"); // Create the sqaure and make it a certain dimension
        drawSquare.style.cssText = `width: ${squareSize}px; height: ${squareSize}px; border: 1px solid #ededed; `;
        drawSquare.classList.add("square");                // Give it an identifier
        
        container.appendChild(drawSquare); // Add it to the container
    }

    let squares = document.querySelectorAll(".square") // Selecting all the new squares 


    for (let i = 0; i < squares.length; i++) { // for every square in the node list 'squares', turn that square black when it's hovered over
        squares[i].addEventListener('mouseover', () => {
            squares[i].style.backgroundColor = 'black';

        })
    }
    }


