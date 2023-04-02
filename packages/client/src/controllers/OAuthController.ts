import OAuthAPI from '../api/OAuthAPI';
import { store } from '../store';
import { authActions } from '../reducers/auth';
import { OAuthData } from '../models/Auth';

class OAuthController {
  private readonly api = new OAuthAPI();

  public async signin(data: OAuthData) {
    await this.request(async () => {
      return await this.api.signinOAuth(data);
    });
  }

  public async getServiceId(redirectUri: string) {
    const res = await this.request(async () => {
      const serviceId = await this.api.getServiceId(redirectUri);
      return serviceId;
    });

    return res;
  }

  protected async request(
    req: () => Promise<Record<string, any> | null>,
    errorHandler?: () => void,
  ) {
    try {
      const res = await req();
      return res;
    } catch (e: any) {
      const reason = e.response.data?.reason;
      errorHandler
        ? errorHandler()
        : store.dispatch(authActions.setError(reason));
      return null;
    }
  }
}

export default new OAuthController();
