import BaseAPI from './BaseAPI';
import {
  User, Password, Login, UserData
} from '../types/interfaces';
import { Methods } from './consts';

export default class UsersAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  public profile(data: UserData): Promise<User> {
    return this.axios({
      method: Methods.Put,
      url: `${this.endpoint}/profile`,
      data
    });
  }

  public avatar(data: FormData): Promise<User> {
    return this.axios({
      method: Methods.Put,
      url: `${this.endpoint}/profile/avatar`,
      data
    });
  }

  public password(data: Password) {
    return this.axios({
      method: Methods.Put,
      url: `${this.endpoint}/password`,
      data
    });
  }

  public request({ id }: { [key in string]: number }): Promise<User> {
    return this.axios({
      url: `${this.endpoint}/${id}`
    });
  }

  public search(data: Login): Promise<User[]> {
    return this.axios({
      method: Methods.Post,
      url: `${this.endpoint}/search`,
      data
    });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
