import AuthAPI from '../api/AuthAPI';
import { SigninData, SignupData } from '../models/User';
import { store } from '../store';
import { authActions } from '../reducers/auth';
import { initialState, updateUser } from '../reducers/profile';
import { EGetUserStatusTypes } from '../models/Auth';

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
      store.dispatch(updateUser(initialState.data));
    });
  }

  public async fetchUser() {
    try {
      store.dispatch(authActions.setStatusLoading(EGetUserStatusTypes.BEGIN));
      const response = await this.api.getUser();
      store.dispatch(updateUser(response.data));
      store.dispatch(authActions.setStatusLoading(EGetUserStatusTypes.SUCCESS));
    } catch (e: any) {
      store.dispatch(authActions.setStatusLoading(EGetUserStatusTypes.FAILURE));
    }
  }

  protected async request(req: () => void) {
    try {
      await req();
    } catch (e: any) {
      const reason = e.response.data?.reason;
      store.dispatch(authActions.setError(reason));
    }
  }
}

export default new AuthController();
