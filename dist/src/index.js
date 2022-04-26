import { CanvasLocal } from "./canvasLocal.js";
let canvas;
let graphics;
canvas = document.getElementById("circlechart");
graphics = canvas.getContext("2d");
function cleanCanvas() {
    graphics.clearRect(0, 0, canvas.width, canvas.height);
}
function initGraphic() {
    const barsNumber = document.getElementById("bars-number");
    let valSize;
    let barsNumberValue = barsNumber.value;
    let xNumbers = barsNumberValue.split(",").map((elem) => parseFloat(elem));
    valSize = xNumbers.length;
    if (barsNumberValue === "") {
        alert("No se ha ingresado ningún valor");
    }
    else {
        cleanCanvas();
        const miCanvas = new CanvasLocal(graphics, canvas, valSize);
        miCanvas.paint(xNumbers);
        barsNumber.value = "";
    }
}
document.getElementById("btn-graficar").addEventListener("click", initGraphic, false);
