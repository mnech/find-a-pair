import { store } from '../store';
import { forumActions } from '../reducers/forum';
import TopicDbApi from '../api/db/TopicDbApi';
import { TopicCreateRequest } from '../models/Db';

class ForumController {
  private readonly api = new TopicDbApi();

  public async createTopic(data: TopicCreateRequest) {
    await this.request(async () => {
      await this.api.create(data);
      await this.getAllTopics();
    });
  }

  public async deleteTopic(id: number) {
    await this.request(async () => {
      await this.api.delete({ id });
      await this.getAllTopics();
    });
  }

  public async getAllTopics() {
    await this.request(async () => {
      const response = await this.api.getAllTopics();
      store.dispatch(forumActions.setTopicsData(response.data));
    });
  }
  protected async request(req: () => void) {
    store.dispatch(forumActions.setLoading(true));

    try {
      await req();

      store.dispatch(forumActions.setError(null));
    } catch (e: any) {
      store.dispatch(forumActions.setError(e.reason));
    } finally {
      store.dispatch(forumActions.setLoading(false));
    }
  }
}

export default new ForumController();
