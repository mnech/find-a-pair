import i5965270 from "./imgs/game_item_flower_star.png";
import i5965263 from "./imgs/game_item_glass_jar.png";
import i5965278 from "./imgs/game_item_tree_leaf.png";
import i5965284 from "./imgs/game_item_kettle.png";
import i5965290 from "./imgs/game_item_letters.png";
import i5965297 from "./imgs/game_item_plant_in_the_pot.png";
import i5965304 from "./imgs/game_item_cup.png";
import i5965312 from "./imgs/game_item_telephone.png";
import i5965320 from "./imgs/game_item_orange.png";
import i5965327 from "./imgs/game_item_notebook.png";
import i5965333 from "./imgs/game_item_tv.png";
import i5965343 from "./imgs/game_item_candle.png";
import i5965366 from "./imgs/game_item_yarn.png";
import i5965375 from "./imgs/game_item_backpack.png";
import i5965452 from "./imgs/game_item_branch.png";


type ScuareT = {
  x: number,
  y: number,
  width: number,
  height: number,
  status: number,
  id: number,
  image: HTMLImageElement,
  i: string,
};


export class GameView {

  textColor1 = "#0095DD";
  canvas: any;
  ctx: any;
  column = 6;
  rows = 5;
  padding = 10;
  fieldOfSquares: ScuareT[][] = [];
  width = 50;
  height = 50;
  marginLeftX: number;
  marginTopY: number;
  score = 0;
  attempts = 0;
  endGame = 0;
  totalScore = 0;

  baseImgs: string[] = [
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

  imgs: string[] = [];
  compareImages: ScuareT[] = [];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.marginLeftX =
      this.canvas.width / 2 - this.width * 3 - this.padding * 2.5;
    this.marginTopY = 70;
    this.textScore();
    this.textAttempts();
  }

  generateArrayWithImgs(column: number, rows: number) {
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
    this.generateArrayWithImgs(this.column, this.rows);
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
