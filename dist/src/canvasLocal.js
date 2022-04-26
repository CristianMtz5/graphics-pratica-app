export class CanvasLocal {
    constructor(g, canvas, rW, rH) {
        this.graphics = g;
        this.rWidth = rW;
        this.rHeight = rH;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
    }
    iX(x) {
        return Math.round(this.centerX + x / this.pixelSize);
    }
    iY(y) {
        return Math.round(this.centerY - y / this.pixelSize);
    }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    fx(x) {
        return Math.pow(x, 3);
    }
    paint() {
        this.graphics.strokeStyle = "#cecbcb";
        for (let i = -16; i <= 16; i += 0.2) {
            this.drawLine(this.iX(i), this.iY(-16), this.iX(i), this.iY(16));
        }
        for (let i = -16; i <= 16; i += 0.2) {
            this.drawLine(this.iX(-16), this.iY(i), this.iX(16), this.iY(i));
        }
        this.graphics.strokeStyle = "#797575";
        for (let i = -16; i <= 16; i++) {
            this.drawLine(this.iX(i), this.iY(-10), this.iX(i), this.iY(10));
            this.drawLine(this.iX(-10), this.iY(i), this.iX(10), this.iY(i));
        }
        this.graphics.strokeStyle = "#000000";
        for (let i = -16; i <= 16; i++) {
            this.drawLine(this.iX(-16), this.iY(0), this.iX(16), this.iY(0));
            this.graphics.fillText(i.toString(), this.iX(i), this.iY(-0.2));
            this.drawLine(this.iX(0), this.iY(-16), this.iX(0), this.iY(16));
            this.graphics.fillText(i.toString(), this.iX(0.1), this.iY(i));
        }
        this.graphics.strokeStyle = "#fa320f";
        for (let x = -10; x <= 10; x += 0.01) {
            this.drawLine(this.iX(x), this.iY(this.fx(x)), this.iX(x + 0.1), this.iY(this.fx(x + 0.1)));
        }
    }
}
