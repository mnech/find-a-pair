import { Table } from 'react-bootstrap';
import { Pagination } from './components/Pagination';
import {
  IUserScore,
  limitPage,
  ratingFieldName,
  teamName,
} from '../../models/Leaderboard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { leaderboardActions } from '../../reducers/leaderboard';
import { useEffect } from 'react';

import './Leaderboard.scss';
import LeaderboardController from '../../controllers/LeaderboardController';

export const Leaderboard = () => {
  const activePage = useSelector(
    (state: RootState) => state.leaderboard.request.cursor,
  );
  const data = useSelector((state: RootState) => state.leaderboard.data);
  const dispatch = useDispatch();

  const renderRow = ({ data }: IUserScore, idx: number): JSX.Element => {
    return (
      <tr key={idx + 1}>
        <td className="leaderboard-cell">{idx + 1}</td>
        <td className="leaderboard-cell">{data.first_name}</td>
        <td className="leaderboard-cell">{data[ratingFieldName]}</td>
      </tr>
    );
  };

  const handleChangePage = (value: number) => {
    dispatch(leaderboardActions.setPage(value));
  };

  useEffect(() => {
    const cursor = (activePage - 1) * limitPage;
    LeaderboardController.getTeamLeaderboard(teamName, {
      ratingFieldName,
      cursor,
      limit: limitPage,
    });
  }, [activePage]);

  return (
    <div className="container-md overflow-auto mt-5 w-50 h-auto container">
      <div className="h3 pb-3">LeaderBoard</div>
      <Table
        striped
        bordered
        hover
        variant="striped"
        size="md"
        className="pb-3 leaderboard"
      >
        <thead>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>Рейтинг</th>
          </tr>
        </thead>
        <tbody>{data?.map((userRate, idx) => renderRow(userRate, idx))}</tbody>
      </Table>
      <Pagination page={activePage} onChange={handleChangePage} />
    </div>
  );
};
