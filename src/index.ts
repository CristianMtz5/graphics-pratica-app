import { CanvasLocal } from "./canvasLocal.js";

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById("circlechart");
graphics = canvas.getContext("2d");

function cleanCanvas() {
  graphics.clearRect(0, 0, canvas.width, canvas.height);
}

function initGraphic() {
  const barsNumber = <HTMLInputElement>document.getElementById("bars-number");
  let valSize: number;
  let barsNumberValue = barsNumber.value;
  let xNumbers = barsNumberValue.split(",").map((elem) => parseFloat(elem));
  valSize = xNumbers.length;

  if (barsNumberValue === "") {
    alert("No se ha ingresado ningún valor");
  } else {
    cleanCanvas();
    const miCanvas: CanvasLocal = new CanvasLocal(graphics, canvas, valSize);
    miCanvas.paint(xNumbers);
    barsNumber.value = "";
  }
}

document.getElementById("btn-graficar").addEventListener("click", initGraphic, false);
