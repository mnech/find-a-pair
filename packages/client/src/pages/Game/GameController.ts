import { GameView } from './GameView';
import type { SquareT } from './GameView';

enum GameStatuses {
  StartGame = '0_start game',
  RestartGame = 'restart game',
}

enum SquareStasuses {
  imageIsReadyForTheOpening = 1,
  imageMatched = 2,
}

const closingTimeMismatchImages = 800;
const closingTimeOfAllImages = 2000;

export class GameController extends GameView {
  gameStatus = '0_start game';
  intervalTime = 10;
  score = 0;
  lives = 3;
  blockSquares = true;

  constructor(
    canvas: HTMLCanvasElement | null,
    ctx: CanvasRenderingContext2D | null,
  ) {
    super(canvas, ctx);
    this.mouseClick = this.mouseClick.bind(this);
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
    document.addEventListener('click', this.mouseClick);
  }

  ablation() {
    document.removeEventListener('click', this.mouseClick);
  }

  mouseClick(e: { clientX: number; clientY: number }) {
    const relativeX = e.clientX - this.canvas.offsetLeft;
    const relativeY = e.clientY - this.canvas.offsetTop;
    const isThereAClickOnTheCanvas =
      relativeX > 0 &&
      relativeX < this.canvas.width &&
      relativeY > 0 &&
      relativeY < this.canvas.height;
    if (isThereAClickOnTheCanvas) {
      const isThereAClickOnTheTextStartRestartGame =
        relativeX > this.canvas.width / 2 - 100 &&
        relativeX < this.canvas.width / 2 + 100 &&
        relativeY > this.canvas.height - 80 &&
        relativeY < this.canvas.height - 50;
      if (isThereAClickOnTheTextStartRestartGame) {
        this.clickStartGameHandler();
      } else if (!this.blockSquares) {
        this.clickSquardHandler(relativeX, relativeY);
      }
    }
  }

  clickStartGameHandler() {
    if (this.gameStatus == GameStatuses.StartGame) {
      this.blockSquares = false;
      this.openALLImages();
      this.textRestartGame();
      this.gameStatus = GameStatuses.RestartGame;
    } else if (this.gameStatus == GameStatuses.RestartGame) {
      this.blockSquares = true;
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
            if (square.status == SquareStasuses.imageIsReadyForTheOpening) {
              this.drawImg(square);
              square.status = 0;
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
        if (status == SquareStasuses.imageIsReadyForTheOpening) {
          this.clearA(squard.x, squard.y, squard.width, squard.height);
          this.drawSquare(squard);
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
          clearCompareImages(SquareStasuses.imageMatched);
          this.setEndGame();
        } else {
          setTimeout(
            clearCompareImages,
            closingTimeMismatchImages,
            SquareStasuses.imageIsReadyForTheOpening,
          );
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
    this.helperGetAllImages(this.drawAllImgs);
    setTimeout(this.closeALLImages.bind(this), closingTimeOfAllImages);
  }

  closeALLImages() {
    this.helperGetAllImages(this.drawSquare);
  }

  helperGetAllImages(additionalFunction: (square: SquareT) => void) {
    for (let c = 0; c < this.column; c++) {
      for (let r = 0; r < this.rows; r++) {
        const square = this.fieldOfSquares[c][r];
        this.clearA(square.x, square.y, square.width, square.height);
        additionalFunction(square);
      }
    }
  }

  restartGame() {
    this.leadUpField();
    this.createField();
    this.gameStatus = 'restart game';
  }
}
