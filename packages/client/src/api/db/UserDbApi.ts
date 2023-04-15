import BaseAPI from '../BaseAPI';
import { UserDbRequest } from '../../models/UserDb';
import { Methods } from '../consts';

export default class UserDbApi extends BaseAPI {
  constructor() {
    super('/user', '');
  }

  checkIfUserExists(id: number) {
    return this.request({
      url: `${this.endpoint}/${id}`,
    });
  }

  addUserDb(data: UserDbRequest) {
    return this.request({
      method: Methods.Post,
      url: `${this.endpoint}`,
      data,
    });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
