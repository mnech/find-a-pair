export interface ITopic {
  id: number;
  title: string;
  userName: string;
  date: string;
}

export interface IForumState {
  topicsData: ITopic[];
  currentTopic: ITopic | null;
  error: string | null;
  isLoading: boolean;
}

export interface User {
  userName: string;
}
