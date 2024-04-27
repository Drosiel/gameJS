/* eslint-disable @typescript-eslint/no-explicit-any */
import "../../../public/card.png";
export interface ISpriteConstructor {
  width: number;
  height: number;
  posX: number;
  posY: number;
  text: string;
  ctx: CanvasRenderingContext2D;
}

export class Sprite {
  width: number;
  height: number;
  posX: number;
  posY: number;
  ctx: CanvasRenderingContext2D;
  text: string;

  constructor({ width, height, posX, posY, text, ctx }: ISpriteConstructor) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.text = text;
    this.ctx = ctx;
  }

  draw(w: number, h: number, color: string) {
    const img = new Image();
    img.src = "../../../public/card.png";
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    // this.ctx.roundRect(this.posX, this.posY, w, h, 8);
    this.ctx.drawImage(img, this.posX, this.posY, w, h);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.font = "32px serif";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText(this.text, this.posX + w / 2, this.posY + h / 1.5);
  }
}
