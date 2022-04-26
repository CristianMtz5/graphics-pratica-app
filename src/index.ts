import { CanvasLocal } from "./canvasLocal.js";
let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById("circlechart");
graphics = canvas.getContext("2d");

function cleanCanvas() {
  graphics.clearRect(0, 0, canvas.width, canvas.height);
}

function initGraphic() {
  let disX = 8;
  let disY = 8;
  const miCanvas: CanvasLocal = new CanvasLocal(graphics, canvas, disX, disY);
  miCanvas.paint();
}

initGraphic();

function zoomI() {
  cleanCanvas();
  const inputW = <HTMLInputElement>document.getElementById("input-W");
  const inputH = <HTMLInputElement>document.getElementById("input-H");

  let inputWP = parseInt(inputW.value);
  let inputHP = parseInt(inputH.value);

  if (inputWP < 0 || inputHP < 0 && inputWP > 16 || inputHP > 16) {
    initGraphic();
    alert("Ingresa un valor entre 0 y 16");
  } else {
    const miCanvas: CanvasLocal = new CanvasLocal(
      graphics,
      canvas,
      inputWP,
      inputHP
    );
    miCanvas.paint();
  }
}

document.getElementById("btn-zoom").addEventListener("click", zoomI, false);

/* Zoom con jQuery
let zoomLvl = 1;
let updtZoom = function(zoom){
    zoomLvl += zoom;
    $(canvas).css({ zoom: zoomLvl, '-moz-transform': 'scale(' + zoomLvl + ')' });
}
$('#zoom-in').click(function() {
    updtZoom(0.1);
});
$('#zoom-out').click(function() {
    updtZoom(-0.1);
});  */

