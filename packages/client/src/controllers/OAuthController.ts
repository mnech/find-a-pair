import OAuthAPI from '../api/OAuthAPI';
import { store } from '../store';
import { authActions } from '../reducers/auth';
import { OAuthData } from '../models/Auth';

class OAuthController {
  private readonly api = new OAuthAPI();

  public async signin(data: OAuthData) {
    await this.request(async () => {
      await this.api.signinOAuth(data);
    });
  }

  public async getServiceId(redirectUri: string) {
    const serviceId = await this.api.getServiceId(redirectUri);
    return serviceId;
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

export default new OAuthController();
