import { GameController } from '../GameController';
import { setScore } from '../../../reducers/game';
import { store } from '../../../store';

const canvas: HTMLCanvasElement | null = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
const totalScore = store.getState().game.score;
const dispatch = store.dispatch;
const setTotalScore = (totalScore: number) => {
  dispatch(setScore({ score: totalScore }));
};
const game = new GameController(canvas, ctx, totalScore, setTotalScore);

describe('Тестирование класса GameController', () => {
  test('Тест инициализации класса GameController', () => {
    expect(game).toBeTruthy();
  });

  test('Тест уменьшения значения закрытых пар изображений', () => {
    expect(game.endGame).toBe(15);
    game.setEndGame();
    expect(game.endGame).toBe(14);
  });

  test('Проверка вызова функций, если открыты все изображения', () => {
    const textYouWin = jest.spyOn(game, 'textYouWin');
    const textTotalScore = jest.spyOn(game, 'textTotalScore');
    game.endGame = 1;
    game.setEndGame();
    expect(textYouWin).toBeCalledTimes(1);
    expect(textTotalScore).toBeCalledTimes(1);
  });
});

describe('Тестирование класса GameView', () => {
  test('Корректное значение для построения поля игры', () => {
    const column = 6;
    const rows = 5;
    const endGameTest = (column * rows) / 2;
    game.generateArrayWithImgs(column, rows);
    expect(game.endGame).toBe(endGameTest);
  });

  test('Нечетное значение для построения поля игры', () => {
    expect(() => {
      game.generateArrayWithImgs(5, 5);
    }).toThrow(Error);
  });

  test('Значение для построения поля игры превышает максимально допустимое', () => {
    expect(() => game.generateArrayWithImgs(5, 8)).toThrow(Error);
  });

  test('Значение для построения поля игры превышает минимально допустимое', () => {
    expect(() => game.generateArrayWithImgs(1, 2)).toThrow(Error);
  });

  test('Соответствие числа изображений в массиве, числу квадратов', () => {
    const column = 6;
    const rows = 5;
    const squares = column * rows;
    game.generateArrayWithImgs(column, rows);
    console.log(game.imgs);
    expect(game.imgs.length).toBe(squares);
  });

  afterEach(() => {
    game.imgs = [];
  });
});
