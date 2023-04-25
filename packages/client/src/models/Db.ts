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

export type CommentCreateRequest = {
  user_id: number;
  topic_id: number;
  text: string;
};

export type CommentDeleteRequest = {
  id: number;
};

export interface CommentDb {
  id: number;
  user: User;
  text: string;
  date: number;
}

export type ThemeCreateRequest = {
  name: string;
};

export type UpdateUserThemeRequest = {
  user_id: number;
  theme_id: number;
};

export type SetUserThemeRequest = {
  user_id: number;
};

export type ThemeDeleteRequest = {
  id: number;
};
