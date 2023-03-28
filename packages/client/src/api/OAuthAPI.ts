import BaseAPI from './BaseAPI';
import { Methods } from './consts';
import { OAuthData } from '../models/Auth';

export default class OAuthAPI extends BaseAPI {
  constructor() {
    super('/oauth/yandex');
  }

  public getServiceId(redirect_uri: string) {
    return this.request({
      method: Methods.Get,
      url: `${this.endpoint}/service-id`,
      data: { redirect_uri },
    });
  }

  public signinOAuth(data: OAuthData) {
    return this.request({
      method: Methods.Post,
      url: this.endpoint,
      data,
    });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
