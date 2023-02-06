import AuthAPI from '../api/AuthAPI'
import { SigninData, SignupData } from '../models/User'

class AuthController {
  private readonly api = new AuthAPI()

  public async signin(data: SigninData, cb?: (value: string) => void) {
    await this.request(async () => {
      await this.api
        .signin(data)
        .then(async () => await this.fetchUser())
        .catch(e => {
          cb && cb(e.response?.data?.reason)
        })
    })
  }

  public async signup(data: SignupData) {
    await this.request(async () => {
      await this.api.signup(data)

      await this.fetchUser()
    })
  }

  public async logout() {
    await this.request(async () => {
      await this.api.logout()
    })
  }

  public async fetchUser() {
    const user = await this.api.request()
  }

  protected async request(req: () => void) {
    try {
      req()
    } catch (e: any) {
      console.error(e)
      return e.data.message
    }
  }
}

export default new AuthController()
