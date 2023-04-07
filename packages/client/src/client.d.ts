import { RootState } from './store';

declare const __SERVER_PORT__: number;

declare interface Window {
  initialState?: RootState;
}
