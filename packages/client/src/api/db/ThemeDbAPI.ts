import BaseAPI from '../BaseAPI';
import {
  ThemeCreateRequest,
  UpdateUserThemeRequest,
  ThemeDeleteRequest,
} from '../../models/Db';
import { Methods } from '../consts';

export default class ThemeDbApi extends BaseAPI {
  constructor() {
    super('/theme', true);
  }

  create(data: ThemeCreateRequest) {
    return this.request({
      method: Methods.Post,
      url: `${this.endpoint}`,
      data,
    });
  }

  delete(data: ThemeDeleteRequest) {
    return this.request({
      method: Methods.Delete,
      url: `${this.endpoint}`,
      data,
    });
  }

  getUserTheme(user_id: number) {
    return this.request({
      url: `${this.endpoint}/user_theme/${user_id}`,
    });
  }

  updateUserTheme(data: UpdateUserThemeRequest) {
    return this.request({
      method: Methods.Put,
      url: `${this.endpoint}/user_theme`,
      data,
    });
  }

  getAllThemes() {
    return this.request({
      url: `${this.endpoint}`,
    });
  }

  update = undefined;
}
