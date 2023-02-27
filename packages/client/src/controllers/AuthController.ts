import AuthAPI from '../api/AuthAPI';
import { SigninData, SignupData } from '../models/User';
import { store } from '../store';
import { authActions } from '../reducers/auth';
import { resetData, updateUser } from '../reducers/profile';
import { UserStatusTypes } from '../models/Auth';

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
      store.dispatch(resetData());
    });
  }

  public async fetchUser() {
    await this.request(
      async () => {
        store.dispatch(authActions.setUserLoadingStatus(UserStatusTypes.BEGIN));
        const response = await this.api.getUser();
        store.dispatch(updateUser(response.data));
        store.dispatch(
          authActions.setUserLoadingStatus(UserStatusTypes.SUCCESS),
        );
      },
      () =>
        store.dispatch(
          authActions.setUserLoadingStatus(UserStatusTypes.FAILURE),
        ),
    );
  }

  protected async request(req: () => void, errorHandler?: () => void) {
    try {
      await req();
    } catch (e: any) {
      const reason = e.response.data?.reason;
      errorHandler
        ? errorHandler()
        : store.dispatch(authActions.setError(reason));
    }
  }
}

export default new AuthController();
