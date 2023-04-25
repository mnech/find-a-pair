export interface IComments {
  id: number;
  userName: string;
  text: string;
  date: string;
}

export interface ICommentsState {
  commentsData: IComments[];
  error: string | null;
  isLoading: boolean;
}
