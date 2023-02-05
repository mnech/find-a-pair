import axios from 'axios';

export default abstract class BaseAPI {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;
  protected axios = axios;

  protected constructor(endpoint: string) {
    this.endpoint = BaseAPI.API_URL + endpoint;
    this.axios.defaults.withCredentials = true;
  }

  public abstract create?(data: unknown): Promise<unknown>;

  public abstract request?(identifier: unknown): Promise<unknown>;

  public abstract update?(identifier: unknown): Promise<unknown>;

  public abstract delete?(identifier: unknown): Promise<unknown>;
}
