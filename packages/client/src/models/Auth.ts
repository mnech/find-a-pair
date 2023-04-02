export enum UserStatusTypes {
  BEGIN = 'BEGIN',
  FAILURE = 'FAILURE',
  SUCCESS = 'SUCCESS',
}

export interface OAuthData {
  code: string;
  redirect_uri: string;
}
