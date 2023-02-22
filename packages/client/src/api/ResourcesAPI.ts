import BaseAPI from './BaseAPI';
import { Methods } from './consts';

export default class ResourcesAPI extends BaseAPI {
  constructor() {
    super('/resources');
  }

  public upload(data: FormData) {
    return this.request({
      method: Methods.Post,
      url: `${this.endpoint}/`,
      data,
    });
  }

  public getData(path: string) {
    return this.request({
      url: `${path}`,
    });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
