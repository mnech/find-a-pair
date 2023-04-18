import BaseAPI from './BaseAPI';
import { Methods } from './consts';
import { ILeaderData, ILeaderboardRequest } from '../models/Leaderboard';

export default class LeaderboardAPI extends BaseAPI {
  constructor() {
    super('/leaderboard');
  }

  public addUserToLeaderboard(data: ILeaderData) {
    return this.request({
      method: Methods.Post,
      url: this.endpoint,
      data,
    });
  }

  public getTeamLeaderboard(teamName: string, data: ILeaderboardRequest) {
    return this.request({
      method: Methods.Post,
      url: `${this.endpoint}/${teamName}`,
      data,
    });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
