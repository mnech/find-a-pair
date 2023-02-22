import BaseAPI from './BaseAPI';
import { SigninData, SignupData, User } from '../models/User';
import { Methods } from './consts';
import { AxiosPromise } from 'axios';

export default class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  public signin(data: SigninData) {
    return this.request({
      method: Methods.Post,
      url: `${this.endpoint}/signin`,
      data,
    });
  }

  public signup(data: SignupData) {
    return this.request({
      method: Methods.Post,
      url: `${this.endpoint}/signup`,
      data,
    });
  }

  public getUser(): AxiosPromise<User> {
    return this.request({
      url: `${this.endpoint}/user`,
    });
  }

  public logout() {
    return this.request({
      method: Methods.Post,
      url: `${this.endpoint}/logout`,
    });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
