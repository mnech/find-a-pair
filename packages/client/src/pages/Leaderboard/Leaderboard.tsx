import Table from 'react-bootstrap/Table';
import { Pagination } from './components/Pagination';
import './Leaderboard.scss';
import { IUserScore } from '../../models/Leaderboard'
import "./Leaderboard.scss";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { leaderboardActions } from '../../reducers/leaderboard'

export const Leaderboard = () => {

  const activePage = useSelector((state: RootState) => state.leaderboard.request.cursor)
  const data = useSelector((state: RootState) => state.leaderboard.data)
  const dispatch = useDispatch();

  const renderRow = (row: IUserScore, idx: number): JSX.Element => {
    return (
      <tr key={row.name}>
        <td>{idx + 1}</td>
        <td>{row.name}</td>
        <td>{row.score}</td>
      </tr>
    );
  };

  const handleChangePage = (value: number) => {
    dispatch(leaderboardActions.setPage(value));
  }

  return (
    <div className="container-md overflow-auto mt-5 w-50 h-auto container">
      <div className="h3 pb-3">LeaderBoard</div>
      <Table
        striped
        bordered
        hover
        variant="striped"
        size="md"
        className="pb-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Рейтинг</th>
          </tr>
        </thead>
        <tbody>{data?.map((userRate, idx) => renderRow(userRate, idx))}</tbody>
      </Table>
      <Pagination page={activePage} onChange={handleChangePage}/>
    </div>
  );
};
