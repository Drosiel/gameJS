import { RenderPool } from "../display";

/* eslint-disable @typescript-eslint/no-explicit-any */
export class Game {
  contextUI: CanvasRenderingContext2D | null = null;
  contextGAME: CanvasRenderingContext2D | null = null;
  contextBG: CanvasRenderingContext2D | null = null;

  animationFrameId: number | null = null;

  init({ height, width }: any) {
    const createRenderUI = new RenderPool({ game: this });
    const createRenderGAME = new RenderPool({ game: this });
    const createRenderBG = new RenderPool({ game: this });

    const { context: contextUI } = createRenderUI.create({
      height,
      width,
      nameCanvas: "canvas-ui",
    });
    this.contextUI = contextUI;

    const { context: contextGAME } = createRenderGAME.create({
      height,
      width,
      nameCanvas: "canvas-game",
    });
    this.contextGAME = contextGAME;

    const { context: contextBG } = createRenderBG.create({
      height,
      width,
      nameCanvas: "canvas-bg",
    });
    this.contextBG = contextBG;

    return {
      contextUI,
      contextGAME,
      contextBG,
    };
  }

  start(draw: any) {
    const render = () => {
      if (this.contextUI) {
        this.contextUI.fillStyle = "#577555";
        this.contextUI.fillRect(
          0,
          0,
          this.contextUI.canvas.width,
          this.contextUI.canvas.height
        );
      }
      if (this.contextGAME) {
        this.contextGAME.fillStyle = "#577088";
        this.contextGAME.fillRect(
          0,
          0,
          this.contextGAME.canvas.width,
          this.contextGAME.canvas.height
        );
      }
      if (this.contextBG) {
        this.contextBG.fillStyle = "#599111";
        this.contextBG.fillRect(
          0,
          0,
          this.contextBG.canvas.width,
          this.contextBG.canvas.height
        );
      }

      if (draw) {
        draw();
      }

      this.animationFrameId = window.requestAnimationFrame(render);
    };

    render();
  }

  stop() {
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }
}
