import {
  limitPage,
  paginationMin,
  ratingFieldName,
} from '../models/Leaderboard';

export const preloadedState = {
  leaderboard: {
    //пока заглушка
    data: [
      {
        name: 'User',
        score: 1,
      },
      {
        name: 'Jane',
        score: 2,
      },
      {
        name: 'James',
        score: 7,
      },
      {
        name: 'Luis',
        score: 10,
      },
    ],
    request: {
      ratingFieldName: ratingFieldName,
      cursor: paginationMin,
      limit: limitPage,
    },
  },
};
