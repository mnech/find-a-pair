import { store } from '../store';
import LeaderboardAPI from '../api/LeaderboardAPI';
import { ILeaderData, ILeaderboardRequest } from '../models/Leaderboard';
import { leaderboardActions } from '../reducers/leaderboard';

class LeaderboardController {
  private readonly api = new LeaderboardAPI();

  public async addUserToLeaderboard(data: ILeaderData) {
    const res = await this.request(async () => {
      return await this.api.addUserToLeaderboard(data);
    });

    return res?.status === 200;
  }

  public async getTeamLeaderboard(teamName: string, data: ILeaderboardRequest) {
    const leaderboardRes = await this.request(async () => {
      return await this.api.getTeamLeaderboard(teamName, data);
    });

    if (leaderboardRes === null || !leaderboardRes?.data) {
      return;
    }

    store.dispatch(leaderboardActions.setLeaderboardTeam(leaderboardRes.data));
  }

  protected async request(
    req: () => Promise<Record<string, any> | null>,
    errorHandler?: () => void,
  ) {
    try {
      return await req();
    } catch (e: any) {
      const reason = e.response.data?.reason;
      errorHandler
        ? errorHandler()
        : store.dispatch(leaderboardActions.setError(reason));
      return null;
    }
  }
}

export default new LeaderboardController();
