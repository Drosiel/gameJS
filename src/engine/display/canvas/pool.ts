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
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", nameCanvas);
    canvas.style.position = "absolute"

    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = width;
    canvas.height = height;
    

    document.body.appendChild(canvas);
    return { context };
  }
}
