import AuthAPI from '../api/AuthAPI';
import { SigninData, SignupData } from '../types/interfaces';

class AuthController {
  private readonly api = new AuthAPI();

  public async signin(data: SigninData) {
    await this.request(async () => {
      await this.api.signin(data);

      await this.fetchUser();
    });
  }

  public async signup(data: SignupData) {
    await this.request(async () => {
      await this.api.signup(data);

      await this.fetchUser();
    });
  }

  public async logout() {
    await this.request(async () => {
      await this.api.logout();
    });
  }

  public async fetchUser() {
    const user = await this.api.request();
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
