import UsersAPI from '../api/UsersAPI';
import { Password, UserData } from '../models/User';
import { store } from '../store';
import { setError, setSaving, updateUser } from '../reducers/profile';
import ResourcesController from './ResourcesController';

class UsersController {
  private readonly api = new UsersAPI();

  public async updateProfile(data: UserData) {
    await this.request(async () => {
      const user = await this.api.updateProfile(data);

      store.dispatch(updateUser({ data: user.data }));
    });
  }

  public async updateAvatar(data: FormData) {
    await this.request(async () => {
      const user = await this.api.updateAvatar(data);

      store.dispatch(updateUser({ data: user.data }));

      const { avatar } = user.data;
      if (avatar) {
        await ResourcesController.getData(avatar);
      }
    });
  }

  public async updatePassword(data: Password) {
    await this.request(async () => {
      await this.api.updatePassword(data);
    });
  }

  public async getUser(id: number) {
    await this.api.getUser({ id });
  }

  public async searchUser(login: string) {
    const users = await this.api.search({ login });
    return users;
  }

  protected async request(req: () => void) {
    store.dispatch(setSaving(true));

    try {
      await req();

      store.dispatch(setError(null));
    } catch (e: any) {
      store.dispatch(setError(e.reason));
    } finally {
      store.dispatch(setSaving(false));
    }
  }
}

export default new UsersController();
