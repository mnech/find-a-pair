import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { EGetUserStatusTypes } from '../models/Auth';

export const errorSelector = createSelector(
  (state: RootState) => state.auth.error,
  (error: string | null | undefined) => {
    return error;
  },
);

export const statusSelector = createSelector(
  (state: RootState) => state.auth.status,
  (status: EGetUserStatusTypes | null) => {
    return status;
  },
);
