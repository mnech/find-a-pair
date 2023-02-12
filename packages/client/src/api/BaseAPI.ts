import Transport, { TRequest } from '../utils/Transport';

export default abstract class BaseAPI {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;
  protected Transport: Transport = new Transport();

  protected constructor(endpoint: string) {
    this.endpoint = BaseAPI.API_URL + endpoint;
  }

  protected request(req: TRequest) {
    return this.Transport.request(req)
  }

  public abstract create?(data: unknown): Promise<unknown>;

  public abstract update?(identifier: unknown): Promise<unknown>;

  public abstract delete?(identifier: unknown): Promise<unknown>;
}
