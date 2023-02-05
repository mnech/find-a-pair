import UsersAPI from '../api/UsersAPI';
import { Password, UserData } from '../types/interfaces';
import ResourcesController from './ResourcesController';

class UsersController {
  private readonly api = new UsersAPI();

  public async profile(data: UserData) {
    await this.request(async () => {
      const user = await this.api.profile(data);

      console.log(user);
      // TODO Здесь должены данные пользователя записываться в стор (редакс в будущем)
    });
  }

  public async avatar(data: FormData) {
    await this.request(async () => {
      const user = await this.api.avatar(data);

      // TODO Здесь должены данные пользователя записываться в стор (редакс в будущем)

      /*      const { avatar } = store.getState().user.data;
            if (avatar) {
              await ResourcesController.fetchData(avatar);
            }*/
    });
  }

  public async password(data: Password) {
    await this.request(async () => {
      await this.api.password(data);
    });
  }

  public async fetchUser(id: number) {
    await this.api.request({ id });
  }

  public async search(login: string) {
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
