import { store } from '../store';
import { themeActions } from '../reducers/theme';
import ThemeDbApi from '../api/db/ThemeDbAPI';
import { UpdateUserThemeRequest } from '../models/Db';
import { Themes } from '../consts';

class ThemeController {
  private readonly api = new ThemeDbApi();

  public async createTheme(name: string) {
    await this.request(async () => {
      await this.api.create({ name });
    });
  }

  public async deleteTheme(id: number) {
    await this.request(async () => {
      await this.api.delete({ id });
      await this.getAllThemes();
    });
  }

  public async getUserTheme(user_id: number) {
    await this.request(async () => {
      const response = await this.api.getUserTheme(user_id);
      if (response.data) {
        store.dispatch(themeActions.setUserTheme(response.data.theme_id));
      } else {
        store.dispatch(themeActions.setUserTheme(Themes.light));
      }
    });
  }

  public async updateUserTheme(data: UpdateUserThemeRequest) {
    await this.request(async () => {
      const { user_id, theme_id } = data;
      await this.api.updateUserTheme({ user_id, theme_id });
      await this.getUserTheme(user_id);
    });
  }

  public async getAllThemes() {
    await this.request(async () => {
      const response = await this.api.getAllThemes();
      store.dispatch(themeActions.setThemes(response.data));
    });
  }

  protected async request(req: () => void) {
    try {
      await req();
      store.dispatch(themeActions.setError(null));
    } catch (e: any) {
      store.dispatch(themeActions.setError(e.reason));
    }
  }
}

export default new ThemeController();
