export interface ITopic {
  id: number;
  title: string;
  userName: string;
}

export interface IForumState {
  topicsData: ITopic[];
  error: string | null;
  isLoading: boolean;
}

export interface IForumResponse {
  id: number;
  title: string;
  user: User;
}

export interface User {
  userName: string;
}
