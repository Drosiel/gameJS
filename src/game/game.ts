/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  cursorInRect,
  getMouseCoords,
  getOffsetCoords,
} from "../engine/core/dragAndDrop/dragAndDrop";
import { Game } from "../engine/core/game";
import { Engine } from "../engine/engine";
import { Card } from "./objects/cards/card";
import { Obj } from "./objects/objects";
import { Tool } from "./objects/tools/tool";

export class GameInit {
  ctxUI: CanvasRenderingContext2D | null = null;
  ctxGAME: CanvasRenderingContext2D | null = null;
  ctxBG: CanvasRenderingContext2D | null = null;

  game: Game | null = null;
  arrayElements: Obj[] = [];
  testElem: any = null;

  //TODO инициализация Игры
  init() {
    const game = new Engine.Game();

    this.game = game;

    const { contextUI, contextGAME, contextBG } = game.init({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    this.ctxUI = contextUI;
    this.ctxGAME = contextGAME;
    this.ctxBG = contextBG;

    //*тестовая среда -----------------------------------------------------------------*//

    this.arrayElements = new Array(10)
      .fill(0)
      .map(
        (e, idx) =>
          new Card({
            ctx: contextGAME,
            posX: (window.innerWidth / 25) * idx + window.innerWidth / 15,
            posY: (window.innerHeight / 15) * idx,
            zIndex: idx,
            text: "",
          })
      )
      .sort((a, b) => a.zIndex - b.zIndex);

    this.testElem = new Tool({
      ctx: contextGAME,
      posX: 500,
      posY: 500,
      zIndex: 88,
      text: "верстак",
    });

    // this.arrayElements.forEach((elem: Card) => {
    //   elem.init();
    // });

    this.ctxGAME.canvas.addEventListener("click", (e: any) => {
      const mouse = getMouseCoords({
        canvas: this.ctxGAME && this.ctxGAME.canvas,
        event: e,
      });

      if (!mouse) {
        return null;
      }

      //* проверяем попал ли курсор в коллизию объекта
      this.arrayElements.forEach((elem: any) => {
        if (
          cursorInRect(
            mouse.x,
            mouse.y,
            elem.sprite.posX,
            elem.sprite.posY,
            elem.width,
            elem.height
          )
        ) {
          if (elem.tool) {
            elem.open();
          }
        }
      });
    });

    this.ctxGAME.canvas.addEventListener("mousemove", (e: any) => {
      const mouse = getMouseCoords({
        canvas: this.ctxGAME && this.ctxGAME.canvas,
        event: e,
      });

      if (!mouse) {
        return null;
      }

      this.arrayElements.forEach((elem: any) => {
        if (elem.selected) {
          elem.sprite.posX = mouse.x - elem.offset.x;
          elem.sprite.posY = mouse.y - elem.offset.y;
        }

        cursorInRect(
          mouse.x,
          mouse.y,
          elem.sprite.posX,
          elem.sprite.posY,
          elem.width,
          elem.height
        )
          ? elem.active != true
            ? (elem.active = !elem.active)
            : false
          : (elem.active = false);
      });
    });

    this.ctxGAME.canvas.addEventListener("mousedown", (e: any) => {
      //* возвращаем координаты курсора
      const mouse = getMouseCoords({
        canvas: this.ctxGAME && this.ctxGAME.canvas,
        event: e,
      });

      if (!mouse) {
        return null;
      }

      let lastIndex = 0;

      //* проверяем попал ли курсор в коллизию объекта
      this.arrayElements.forEach((elem: Obj, idx: number) => {
        if (
          cursorInRect(
            mouse.x,
            mouse.y,
            elem.sprite.posX,
            elem.sprite.posY,
            elem.width,
            elem.height
          )
        ) {
          lastIndex = idx > lastIndex ? idx : lastIndex;
          elem.offset = getOffsetCoords({
            mouse,
            rect: elem.sprite,
          });
        } else {
          elem.selected = false;
          elem.zIndex -= 1;
        }
      });

      this.arrayElements[lastIndex].selected = true;
      this.arrayElements[lastIndex].zIndex = this.arrayElements.length - 1;

      this.arrayElements.sort((a: Obj, b: Obj) => a.zIndex - b.zIndex);
    });

    this.ctxGAME.canvas.addEventListener("mouseup", () => {
      this.arrayElements.forEach((elem: Obj) => {
        elem.selected = false;
      });

      this.arrayElements.sort((a: Obj, b: Obj) => a.zIndex - b.zIndex);
    });

    //*тестовая среда -----------------------------------------------------------------*//
  }

  //TODO запуск игры
  start() {
    if (this.game) {
      this.game.start(this.draw.bind(this));
    }

    this.arrayElements.push(this.testElem);
  }

  //TODO постоянная отрисовка
  draw() {
    if (this.arrayElements) {
      this.arrayElements.forEach((element: Obj) => {
        element.draw();
      });
    }

    // this.testElem.update();
  }
}
