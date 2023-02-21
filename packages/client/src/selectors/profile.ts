import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../models/User';

export const userDataSelector = createSelector(
  (state: RootState) => state.profile.data,
  (userData: User) => {
    return userData;
  }
);

export const userIsLoadingSelector = createSelector(
  (state: RootState) => state.profile.isLoading,
  (isLoading: boolean) => {
    return isLoading;
  }
);

export const userIsSavingSelector = createSelector(
  (state: RootState) => state.profile.isSaving,
  (isSaving: boolean) => {
    return isSaving;
  }
);

export const userErrorSelector = createSelector(
  (state: RootState) => state.profile.error,
  (error: string | null) => {
    return error;
  }
);
