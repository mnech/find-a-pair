import BaseAPI from '../BaseAPI';
import { CommentCreateRequest, CommentDeleteRequest } from '../../models/Db';
import { Methods } from '../consts';

export default class CommentsDbApi extends BaseAPI {
  constructor() {
    super('/comments', true);
  }

  create(data: CommentCreateRequest) {
    console.log('data: ', data);
    console.log('endpoint: ', this.endpoint);
    return this.request({
      method: Methods.Post,
      url: `${this.endpoint}`,
      data,
    });
  }

  delete(data: CommentDeleteRequest) {
    return this.request({
      method: Methods.Delete,
      url: `${this.endpoint}`,
      data,
    });
  }

  getAllComments() {
    return this.request({
      url: `${this.endpoint}`,
    });
  }

  update = undefined;
}
