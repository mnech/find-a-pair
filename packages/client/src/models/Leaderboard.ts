/**Минимальный номер страницы для отображения*/
export const paginationMin = 1;
/**Максимальный номер страницы для отображения*/
export const paginationMax = 10;
/**Количество записей для отображения*/
export const limitPage = 10;

/**
 * Интерфейс данных с рейтингами
 *
 * name Имя пользователя
 * score Рейтинг
 */
export interface IUserScore {
  name: string;
  score: number;
}

/**
 * Название поля с рейтингом для нашей игры
 */
export const ratingFieldName = 'findAPairScore';

/**
 * Интерфейс данных с рейтингами для API
 *
 * ratingFieldName Название поля с рейтингом
 * cursor Текущая страница
 * limit Количество записей на странице
 */
export interface ILeaderboardRequest {
  ratingFieldName: string;
  cursor: number;
  limit: number;
}

/**
 * Интерфейс стейта для лидерборда
 *
 * data Данные для отображения
 * request Запрос
 */
export interface ILeaderboardState {
  data: IUserScore[];
  request: ILeaderboardRequest;
}
