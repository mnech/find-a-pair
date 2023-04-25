import { store } from '../store';
import { commentsActions } from '../reducers/comments';
import CommentsDbApi from '../api/db/CommentsDbApi';
import { CommentCreateRequest } from '../models/Db';

class CommentsController {
  private readonly api = new CommentsDbApi();

  public async createComment(data: CommentCreateRequest) {
    await this.request(async () => {
      await this.api.create(data);
      await this.getAllComments();
    });
  }

  public async deleteComment(id: number) {
    await this.request(async () => {
      await this.api.delete({ id });
      await this.getAllComments();
    });
  }

  public async getAllComments() {
    await this.request(async () => {
      const response = await this.api.getAllComments();
      store.dispatch(commentsActions.setCommentsData(response.data));
    });
  }
  protected async request(req: () => void) {
    store.dispatch(commentsActions.setLoading(true));

    try {
      await req();

      store.dispatch(commentsActions.setError(null));
    } catch (e: any) {
      store.dispatch(commentsActions.setError(e.reason));
    } finally {
      store.dispatch(commentsActions.setLoading(false));
    }
  }
}

export default new CommentsController();
