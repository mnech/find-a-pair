import ResourcesAPI from '../api/ResourcesAPI';

class ResourcesController {
  private readonly api = new ResourcesAPI();

  public async upload(data: FormData) {
    await this.request(async () => {
      await this.api.upload(data);

      // TODO Здесь должен быть route куда-то
    });
  }

  public async getData(path: string) {
    await this.request(async () => {
      await this.api.getData(path);
    });
  }

  protected async request(req: () => void) {
    try {
      req();
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new ResourcesController();
