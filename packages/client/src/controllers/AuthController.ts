import AuthAPI from '../api/AuthAPI';
import { SigninData, SignupData } from '../models/User';
import { store } from '../store';
import { updateUser } from '../reducers/profile';

class AuthController {
  private readonly api = new AuthAPI();

  public async signin(data: SigninData) {
    await this.request(async () => {
      await this.api.signin(data);

      await this.fetchUser();
    });
  }

  public async signup(signupData: SignupData) {
    await this.request(async () => {
      await this.api.signup(signupData);
      const { data } = await this.fetchUser();
      store.dispatch(updateUser(data));
    });
  }

  public async logout() {
    await this.request(async () => {
      await this.api.logout();
    });
  }

  public async fetchUser() {
    const user = await this.api.getUser();
    return user;
  }

  protected async request(req: () => void) {
    try {
      req();
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
