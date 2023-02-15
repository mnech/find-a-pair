import { Field } from "./Field";

export class GameExe extends Field {

  gameStatus = "0_start game";
  intervalTime = 10;
  gameOver = false;
  score = 0;
  lives = 3;

  constructor(canvas: any, ctx: any) {
    super(canvas, ctx);

    this.setEventTextButtonStartGame();
    this.textButtonStartGame();
    this.createField();
  }

  setEventTextButtonStartGame() {
    document.addEventListener(
      "click",
      this.mauseClickCursorPointer.bind(this),
      false
    );
  }

  mauseClickCursorPointer(e: { clientX: number; clientY: number }) {
    const relativeX = e.clientX - this.canvas.offsetLeft;
    const relativeY = e.clientY - this.canvas.offsetTop;
    if (
      relativeX > 0 &&
      relativeX < this.canvas.width &&
      relativeY > 0 &&
      relativeY < this.canvas.height
    ) {
      if (
        relativeX > this.canvas.width / 2 - 100 &&
        relativeX < this.canvas.width / 2 + 100 &&
        relativeY > this.canvas.height - 80 &&
        relativeY < this.canvas.height - 50
      ) {
        if (this.gameStatus == "0_start game") {
          this.blockSquares = false;
          this.openALLImages();
          this.textRestartGame();
          this.gameStatus = "restart game";
        } else if (this.gameStatus == "restart game") {
          this.closeALLImages();
          this.restartGame();
          this.openALLImages();
          this.blockSquares = false;
        }
      }
    }
  }

  openALLImages() {
    for (let c = 0; c < this.column; c++) {
      for (let r = 0; r < this.rows; r++) {
        const square = this.fieldOfSquares[c][r];
        this.clearA(square.x, square.y, square.width, square.height);
        this.drowImgAll(square.image, square.i, square.x, square.y, this.ctx);
      }
    }
    setTimeout(this.closeALLImages.bind(this), 2000);
  }

  closeALLImages() {
    for (let c = 0; c < this.column; c++) {
      for (let r = 0; r < this.rows; r++) {
        const square = this.fieldOfSquares[c][r];
        this.clearA(square.x, square.y, square.width, square.height);
        this.drowSquare(square.x, square.y, square.width, square.height);
      }
    }
  }

  restartGame() {
    this.leadUpField();
    this.createField();
    this.gameStatus = "restart game";
  }

  textButtonStartGame() {
    this.ctx.clearRect(
      this.canvas.width / 2 - 120,
      this.canvas.height - 50 - 30,
      300,
      30
    );
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = this.textColor1;
    this.ctx.fillText(
      "START GAME",
      this.canvas.width / 2 - 100,
      this.canvas.height - 50
    );
  }

  textRestartGame() {
    this.ctx.clearRect(
      this.canvas.width / 2 - 100,
      this.canvas.height - 50 - 30,
      300,
      30
    );
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = this.textColor1;
    this.ctx.fillText(
      "RESTART GAME",
      this.canvas.width / 2 - 120,
      this.canvas.height - 50
    );
  }

  clearA(
    x: number,
    y: number,
    width: number = this.canvas.width,
    height: number = this.canvas.height
  ) {
    this.ctx.clearRect(x, y, width, height);
  }
}
