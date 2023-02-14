import BaseAPI from './BaseAPI';
import {
  User, Password, Login, UserData
} from '../models/User';
import { Methods } from './consts';
import { AxiosPromise } from 'axios';

export default class UsersAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  public updateProfile(data: UserData): AxiosPromise<User> {
    return this.request({
      method: Methods.Put,
      url: `${this.endpoint}/profile`,
      data
    });
  }

  public updateAvatar(data: FormData): AxiosPromise<User> {
    return this.request({
      method: Methods.Put,
      url: `${this.endpoint}/profile/avatar`,
      data
    });
  }

  public updatePassword(data: Password) {
    return this.request({
      method: Methods.Put,
      url: `${this.endpoint}/password`,
      data
    });
  }

  public getUser({ id }: { [key in string]: number }): AxiosPromise<User> {
    return this.request({
      url: `${this.endpoint}/${id}`
    });
  }

  public search(data: Login): AxiosPromise<User[]> {
    return this.request({
      method: Methods.Post,
      url: `${this.endpoint}/search`,
      data
    });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
