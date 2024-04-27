/* eslint-disable @typescript-eslint/no-explicit-any */
export class Pool {
  create({
    width = 1,
    height = 1,
    nameCanvas,
  }: {
    height: number;
    width: number;
    nameCanvas: string;
  }) {
    const canvas = document.createElement("canvas", { is: "canvas-ui" });
    canvas.setAttribute("id", nameCanvas);

    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = width;
    canvas.height = height;

    document.body.appendChild(canvas);
    return { context };
  }
}

export class RenderPool {
  game = null;

  constructor({ game }: any) {
    this.game = game;
  }

  create({
    height,
    width,
    nameCanvas,
  }: {
    height: number;
    width: number;
    nameCanvas: string;
  }) {
    const pool = new Pool();

    return pool.create({ height, width, nameCanvas });
  }
}
