import { Obj } from "../objects";

export interface ICardConstructor {}

export class Tool extends Obj {
  width: number = 150;
  height: number = 80;
  color: string = "#564879";
  tool: boolean = true;
  isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;

    if (this.isOpen === true) {
      this.color = "green";
      this.width = 450;
      this.height = 240;
      console.log(this.isOpen);
    } else {
      this.color = "red";
      this.width = 150;
      this.height = 80;
      console.log(this.isOpen);
    }
  }
}
