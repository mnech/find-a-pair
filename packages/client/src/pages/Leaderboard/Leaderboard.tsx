import Table from 'react-bootstrap/Table'
import { Pagination } from './components/Pagination'
import { useState } from 'react'
import { IUserRate, paginationMin } from '../../models/Leaderboard'
import './Leaderboard.scss'
import { ErrorBoundary } from '../../utils/ErrorBoundary'

const data: IUserRate[] = [
  {
    name: 'User',
    rate: 1,
  },
  {
    name: 'Jane',
    rate: 2,
  },
  {
    name: 'James',
    rate: 7,
  },
  {
    name: 'Luis',
    rate: 10,
  },
]
export const Leaderboard = () => {
  const [isActivPage, setIsActivPage] = useState(paginationMin)

  const renderRow = (row: IUserRate, idx: number): JSX.Element => {
    return (
      <tr key={row.name}>
        <td>{idx + 1}</td>
        <td>{row.name}</td>
        <td>{row.rate}</td>
      </tr>
    )
  }

  return (
    <ErrorBoundary>
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
          <tbody>
            {data?.map((userRate, idx) => renderRow(userRate, idx))}
          </tbody>
        </Table>
        <Pagination page={isActivPage} onChange={setIsActivPage} />
      </div>
    </ErrorBoundary>
  )
}
