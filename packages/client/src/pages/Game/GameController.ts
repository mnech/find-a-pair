import { GameView } from "./GameView";

export class GameController extends GameView {

  gameStatus = "0_start game";
  intervalTime = 10;
  score = 0;
  lives = 3;
  blockSquares = true;

  constructor(canvas: any, ctx: any) {
    super(canvas, ctx);

    this.setEventClickStartGameAndSquares();
    this.textButtonStartGame();
    this.createField();
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

  setEventClickStartGameAndSquares() {
    document.addEventListener(
      "click",
      this.mauseClick.bind(this),
      false
    );
  }

  mauseClick(e: { clientX: number; clientY: number }) {
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
          this.clickStartGameHandler()
        }else if(!this.blockSquares) {
          this.clickSquardHandler(relativeX, relativeY)
        }
      }
  }

  clickStartGameHandler(){
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
              square.status=0;
              this.compareSquards(square);
            }
          }
        }
      }
    }
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
}
