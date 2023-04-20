export type UserDbRequest = {
  id: number;
  name: string;
};

export type TopicCreateRequest = {
  user_id: number;
  title: string;
};

export type TopicDeleteRequest = {
  id: number;
};

export interface TopicDb {
  id: number;
  title: string;
  user: User;
}

export interface User {
  userName: string;
}
