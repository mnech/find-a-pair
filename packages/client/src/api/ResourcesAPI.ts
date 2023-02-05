import BaseAPI from './BaseAPI';
import { Methods } from './consts';

export default class ResourcesAPI extends BaseAPI {
  constructor() {
    super('/resources');
  }

  public upload(data: FormData) {
    return this.axios({
      method: Methods.Post,
      url: `${this.endpoint}/`,
      data
    });
  }

  public request(path: string) {
    return this.axios({
      url: `${path}`
    });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
