/**Минимальный номер страницы для отображения*/
export const paginationMin=1;
/**Максимальный номер страницы для отображения*/
export const paginationMax=10;

/**
 * Интерфейс данных с рейтингами
 *
 * name Имя пользователя
 * rate Рейтинг
 */
export interface IUserRate {
  name: string,
  rate: number
}