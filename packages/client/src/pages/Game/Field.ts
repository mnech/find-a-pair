import i5965270 from "./imgs/5965270.png";
import i5965263 from "./imgs/5965263.png";
import i5965278 from "./imgs/5965278.png";
import i5965284 from "./imgs/5965284.png";
import i5965290 from "./imgs/5965290.png";
import i5965297 from "./imgs/5965297.png";
import i5965304 from "./imgs/5965304.png";
import i5965312 from "./imgs/5965312.png";
import i5965320 from "./imgs/5965320.png";
import i5965327 from "./imgs/5965327.png";
import i5965333 from "./imgs/5965333.png";
import i5965343 from "./imgs/5965343.png";
import i5965366 from "./imgs/5965366.png";
import i5965375 from "./imgs/5965375.png";
import i5965452 from "./imgs/5965452.png";

export class Field {

  textColor1 = "#0095DD";
  canvas: any;
  ctx: any;
  column = 6;
  rows = 5;
  padding = 10;
  fieldOfSquares: [any][any] = [];
  width = 50;
  height = 50;
  marginLeftX: number;
  marginTopY: number;
  score = 0;
  attempts = 0;
  endGame = 0;
  blockSquares = true;
  totalScore = 0;

 

  baseImgs: any[] = [
    i5965270,
    i5965263,
    i5965278,
    i5965284,
    i5965290,
    i5965297,
    i5965304,
    i5965312,
    i5965320,
    i5965327,
    i5965333,
    i5965343,
    i5965366,
    i5965375,
    i5965452,
  ];

  imgs: any[] = [];
  compareImages: any[] = [];

  constructor(canvas: any, ctx: any) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.marginLeftX =
      this.canvas.width / 2 - this.width * 3 - this.padding * 2.5;
    this.marginTopY = 70;
    this.setEvent();
    this.textScore();
    this.textAttempts();
  }

  leadUpField() {
    this.fieldOfSquares = [];
    this.imgs = [];
    this.compareImages = [];
    this.score = 0;
    this.textScore();
    this.attempts = 0;
    this.textAttempts();
    this.endGame = 0;
    this.blockSquares = true;
    this.totalScore = 0;
    this.textYouWin(true);
    this.textTotalScore(true);
  }

  generateArray(column: number, rows: number) {
    const tally = (column * rows) / 2;
    for (let t = 0; t < tally; t++) {
      this.imgs.push(this.baseImgs[t]);
      this.imgs.push(this.baseImgs[t]);
    }
    this.imgs.sort(() => Math.random() - 0.5);
    this.endGame = tally;
  }

  createSquares() {
    let id = 0;
    for (let c = 0; c < this.column; c++) {
      this.fieldOfSquares[c] = [];
      for (let r = 0; r < this.rows; r++) {
        this.fieldOfSquares[c][r] = {
          x: 0,
          y: 0,
          width: 50,
          height: 50,
          status: 1,
          id: id,
          image: new Image(),
          i: this.imgs[id],
        };
        id++;
      }
    }
  }

  drowImgAll(img: any, i: any, x: number, y: number, ctx: any): any {
    return new Promise<void>((resolve) => {
      img.src = i;
      img.onload = function () {
        ctx.drawImage(img, x, y, 50, 50);
        resolve();
      };
    });
  }

  drowImg(img: any, i: any, x: number, y: number, ctx: any): any {
    img.src = i;
    img.onload = function () {
      ctx.drawImage(img, x, y, 50, 50);
    };
  }

  createField() {
    this.generateArray(this.column, this.rows);
    this.createSquares();
    for (let c = 0; c < this.column; c++) {
      for (let r = 0; r < this.rows; r++) {
        if (this.fieldOfSquares[c][r].status == 1) {
          this.fieldOfSquares[c][r].x =
            c * (this.fieldOfSquares[c][r].width + this.padding) +
            this.marginLeftX;
          this.fieldOfSquares[c][r].y =
            r * (this.fieldOfSquares[c][r].height + this.padding) +
            this.marginTopY;
          this.drowSquare(
            this.fieldOfSquares[c][r].x,
            this.fieldOfSquares[c][r].y,
            this.fieldOfSquares[c][r].width,
            this.fieldOfSquares[c][r].height
          );
        }
      }
    }
  }

  drowSquare(x: number, y: number, width: number, height: number) {
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  setEvent() {
    document.addEventListener("click", this.mauseClick.bind(this), false);
  }

  mauseClick(e: { clientX: number; clientY: number }) {
    if (!this.blockSquares) {
      const relativeX = e.clientX - this.canvas.offsetLeft;
      const relativeY = e.clientY - this.canvas.offsetTop;

      if (
        relativeX > 0 &&
        relativeX < this.canvas.width &&
        relativeY > 0 &&
        relativeY < this.canvas.height
      ) {
        this.clickSquardHandler(relativeX, relativeY);
      }
    }
  }

  clickSquardHandler(relativeX: number, relativeY: number) {
    for (let c = 0; c < this.column; c++) {
      for (let r = 0; r < this.rows; r++) {
        const square = this.fieldOfSquares[c][r];
        if (
          relativeX > square.x &&
          relativeX < square.x + square.width &&
          relativeY > square.y &&
          relativeY < square.y + square.height
        ) {
          if (
            this.compareImages.length < 2 &&
            this.fieldOfSquares[c][r].status != 0 &&
            this.fieldOfSquares[c][r].status != 2
          ) {
            const square = this.fieldOfSquares[c][r];
            this.clearA(square.x, square.y, square.width, square.height);
            if (square.status == 1) {
              this.drowImg(
                square.image,
                square.i,
                square.x,
                square.y,
                this.ctx
              );
              this.compareSquards(square);
            }
          }
        }
      }
    }
  }

  clearA(
    x: number,
    y: number,
    width: number = this.canvas.width,
    height: number = this.canvas.height
  ) {
    this.ctx.clearRect(x, y, width, height);
  }

  compareSquards(image: any) {
    const clearCompareImages = (status: number) => {
      for (let y = 0; y < this.compareImages.length; y++) {
        const squard = this.compareImages[y];
        if (status == 1) {
          this.clearA(squard.x, squard.y, squard.width, squard.height);
          this.drowSquare(squard.x, squard.y, squard.width, squard.height);
        }
        squard.status = status;
      }
      this.compareImages = [];
    };

    if (this.compareImages.length < 2) {
      this.compareImages.push(image);
      if (this.compareImages.length == 2) {
        if (this.compareImages[0].i == this.compareImages[1].i) {
          this.score += 10;
          this.textScore();
          this.attempts += 1;
          this.textAttempts();
          clearCompareImages(2);
          this.setEndGame();
        } else {
          setTimeout(clearCompareImages, 800, 1);
          this.attempts += 1;
          this.textAttempts();
        }
      }
    }
  }

  setEndGame() {
    this.endGame--;
    if (this.endGame == 0) {
      this.textYouWin();
      this.textTotalScore();
      this.blockSquares = true;
    }
  }

  textScore() {
    this.clearA(50, 10, 140, 21);
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = this.textColor1;
    this.ctx.fillText("score: " + this.score, 50, 30);
  }

  textAttempts() {
    this.clearA(50, 40, 220, 21);
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = this.textColor1;
    this.ctx.fillText("attempts: " + this.attempts, 50, 60);
  }

  textYouWin(clear = false) {
    if (clear) {
      this.clearA(this.canvas.width / 2 - 55, 5, 220, 25);
    } else {
      this.ctx.font = "25px Arial";
      this.ctx.fillStyle = this.textColor1;
      this.ctx.fillText("You Win", this.canvas.width / 2 - 55, 30);
    }
  }

  textTotalScore(clear = false) {
    if (clear) {
      this.clearA(this.canvas.width / 2 - 20, 35, 220, 20);
    } else {
      this.totalScore = this.score - this.attempts;
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = this.textColor1;
      this.ctx.fillText(
        this.totalScore as unknown as string,
        this.canvas.width / 2 - 20,
        55
      );
    }
  }
}
