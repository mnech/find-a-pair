import BaseAPI from '../BaseAPI';
import { TopicCreateRequest, TopicDeleteRequest } from '../../models/Db';
import { Methods } from '../consts';

export default class TopicDbApi extends BaseAPI {
  constructor() {
    super('/topics', true);
  }

  create(data: TopicCreateRequest) {
    return this.request({
      method: Methods.Post,
      url: `${this.endpoint}`,
      data,
    });
  }

  delete(data: TopicDeleteRequest) {
    return this.request({
      method: Methods.Delete,
      url: `${this.endpoint}`,
      data,
    });
  }

  getAllTopics() {
    return this.request({
      url: `${this.endpoint}`,
    });
  }

  update = undefined;
}
