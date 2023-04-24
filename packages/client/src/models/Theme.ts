export interface ITheme {
  id: number;
  name: string;
}

export interface IThemeState {
  themes: ITheme[];
  idUserTheme: number;
  error: string | null;
}
