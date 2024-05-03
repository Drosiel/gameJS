import { Pool } from "../display/index";


/* eslint-disable @typescript-eslint/no-explicit-any */
export class Game {
  contextUI: CanvasRenderingContext2D | null = null;
  contextGAME: CanvasRenderingContext2D | null = null;
  contextBG: CanvasRenderingContext2D | null = null;

  animationFrameId: number | null = null;

  init({ height, width }: any) {
    const createRenderUI = new Pool();
    const createRenderGAME = new Pool();
    const createRenderBG = new Pool();
    
    const { context: contextBG } = createRenderBG.create({
      height,
      width,
      nameCanvas: "canvas-bg",
    });
    this.contextBG = contextBG;
    const { context: contextGAME } = createRenderGAME.create({
      height,
      width,
      nameCanvas: "canvas-game",
    });
    this.contextGAME = contextGAME;
        const { context: contextUI } = createRenderUI.create({
          width: 5,
          height: 5,
          nameCanvas: "canvas-ui",
        });
    this.contextUI = contextUI;
    return {
      contextUI,
      contextGAME,
      contextBG,
    };
  }

  start(draw: any) {
    const render = () => {
      // if (this.contextUI) {
      //   this.contextUI.fillStyle = "#646545"
      //   this.contextUI.fillRect(0,0,50,50)
      // }
      if (this.contextGAME) {
        this.contextGAME.fillStyle = "#113355"
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
          14,
          14
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
