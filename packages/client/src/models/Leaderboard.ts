/**Минимальный номер страницы для отображения*/
export const paginationMin = 1;
/**Максимальный номер страницы для отображения*/
export const paginationMax = 10;
/**Количество записей для отображения*/
export const limitPage = 10;

/**Имя команды для API*/
export const teamName = '22-super-duper-puper-team';

/**
 * Название поля с рейтингом для нашей игры
 */
export const ratingFieldName = 'findAPairScore';

/**
 * Интерфейс данных с рейтингами
 *
 * name Имя пользователя
 * score Рейтинг
 */
export interface IUserScore {
  data: {
    [ratingFieldName]: string;
    first_name: string;
    user_id: string;
  };
}

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

export interface ILeaderData {
  data: object;
  ratingFieldName: string;
  teamName: string;
}
