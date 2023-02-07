import BaseAPI from './BaseAPI'
import { SigninData, SignupData, User } from '../models/User'
import { Methods } from './consts'

import BaseAPI from './BaseAPI';
import { SigninData, SignupData, User } from '../models/User';
import { Methods } from './consts';

export default class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  public signin(data: SigninData) {
    return this.axios({
      method: Methods.Post,
      url: `${this.endpoint}/signin`,
      data
    });
  }

  public signup(data: SignupData) {
    return this.axios({
      method: Methods.Post,
      url: `${this.endpoint}/signup`,
      data
    });
  }

  public request(): Promise<User> {
    return this.axios({
      url: `${this.endpoint}/user`
    });
  }

  public logout() {
    return this.axios({
      method: Methods.Post,
      url: `${this.endpoint}/logout`
    });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
