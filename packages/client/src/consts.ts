export const Regexp = {
  email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
  login: /^\d*[a-zA-Z][a-zA-Z\d]{2,20}$/,
  first_name: /^([A-Z][a-z]+$|[А-ЯЁ][а-яё]+$)/,
  second_name: /^([A-Z][a-z]+$|[А-ЯЁ][а-яё]+$)/,
  display_name: /^([A-Z][a-z]+$|[А-ЯЁ][а-яё]+$)/,
  password: /(?=^.{8,40}$)(?![.\n])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).*$/,
  message: /^\s*$/,
  phone: /^(\+)?[\d\- ]{10,15}$/,
};

export enum Fields {
  Email = 'email',
  Login = 'login',
  FirstName = 'first_name',
  SecondName = 'second_name',
  DisplayName = 'display_name',
  Password = 'password',
  OldPassword = 'oldPassword',
  NewPassword = 'newPassword',
  Phone = 'phone',
}

export const MUSIC_URL =
  'http://jplayer.org/audio/mp3/RioMez-01-Sleep_together.mp3';

export const REDIRECT_URI = `http://localhost:3001`;
export const YANDEX_OAUTH =
  'https://oauth.yandex.ru/authorize?response_type=code';
