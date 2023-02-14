import axios from 'axios';
import { Methods } from '../api/consts';

export type TRequest = {
  method?: Methods
  url: string
  data?: unknown
};

export default class Transport {
  protected axios = axios;

  constructor() {
    this.axios.defaults.withCredentials = true;
  }

  public request({ method = Methods.Get, url, data }: TRequest) {
    return this.axios({ method, url, data });
  }
}
