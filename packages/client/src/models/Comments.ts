export interface IComments {
  id: number;
  userName: string;
  text: string;
  date: number;
}

export interface ICommentsState {
  commentsData: IComments[];
  error: string | null;
  isLoading: boolean;
}
