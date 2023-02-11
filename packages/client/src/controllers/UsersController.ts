import UsersAPI from '../api/UsersAPI';
import { Password, UserData } from '../models/User';
import ResourcesController from './ResourcesController';

class UsersController {
  private readonly api = new UsersAPI();

  public async updateProfile(data: UserData) {
    await this.request(async () => {
      const user = await this.api.updateProfile(data);

      // TODO Здесь должены данные пользователя записываться в стор (редакс в будущем)
    });
  }

  public async updateAvatar(data: FormData) {
    await this.request(async () => {
      const user = await this.api.updateAvatar(data);

      // TODO Здесь должены данные пользователя записываться в стор (редакс в будущем)

      /*      const { avatar } = store.getState().user.data;
            if (avatar) {
              await ResourcesController.fetchData(avatar);
            }*/
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
    try {
      await req();
    } catch (e: any) {
      console.error(e.reason);
    }
  }
}

export default new UsersController();
