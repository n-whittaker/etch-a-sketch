for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.cssText = "width: 25px; height: 25px;";
    let container = document.querySelector(".squares-container");

    container.appendChild(square);
}