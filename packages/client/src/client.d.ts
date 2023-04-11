import { RootState } from './store';

declare global {
  const __SERVER_PORT__: number;
  interface Window {
    initialState?: RootState;
  }
}
