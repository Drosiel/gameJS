/* eslint-disable @typescript-eslint/no-explicit-any */
//*
export const getOffsetCoords = ({ mouse, rect }: any) => {
  return {
    x: mouse.x - rect.posX,
    y: mouse.y - rect.posY,
  };
};

//* проверяем попал ли курсор в коллизию объекта
export const cursorInRect = (
  mouseX: any,
  mouseY: any,
  rectX: any,
  rectY: any,
  rectW: any,
  rectH: any
) => {
  const xLine = mouseX > rectX && mouseX < rectX + rectW;
  const yLine = mouseY > rectY && mouseY < rectY + rectH;

  return xLine && yLine;
};

//* возвращает координаты курсора
export const getMouseCoords = ({
  canvas,
  event,
}: {
  canvas: HTMLCanvasElement | null;
  event: any;
}) => {
  if (canvas) {
    const canvasCoords = canvas.getBoundingClientRect();

    return {
      x: event.pageX - canvasCoords.left,
      y: event.pageY - canvasCoords.top,
    };
  }
};
