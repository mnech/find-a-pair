import Transport, { TRequest } from '../utils/Transport';

export default abstract class BaseAPI {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  static DB_API_URL = '/db';
  protected endpoint: string;
  protected Transport: Transport = new Transport();

  protected constructor(endpoint: string, isDbRequest?: boolean) {
    const baseUrl = isDbRequest ? BaseAPI.DB_API_URL : BaseAPI.API_URL;
    this.endpoint = baseUrl + endpoint;
  }

  protected request(req: TRequest) {
    return this.Transport.request(req);
  }

  public abstract create?(data: unknown): Promise<unknown>;

  public abstract update?(identifier: unknown): Promise<unknown>;

  public abstract delete?(identifier: unknown): Promise<unknown>;
}
