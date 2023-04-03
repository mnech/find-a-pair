import { RootState } from '../store';

declare global {
  interface Window {
    initialState?: RootState;
  }
}
