import { paginationMax, paginationMin } from '../../../models/Leaderboard'
import { Pagination as PaginationBase} from 'react-bootstrap'

interface IProps {
  page: number,
  onChange: (page: number) => void
  pageMax?: number
}
export const Pagination = (props: IProps) => {
  const { page, onChange } = props;
  const items = [];
  const pageMax = props.pageMax || paginationMax;
  for (let number = paginationMin; number <= pageMax; number++) {
    items.push(
      <PaginationBase.Item key={number} active={number === page}>
        {number}
      </PaginationBase.Item>,
    );
  }

  const handlePageChange = (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    console.log((event.target as Element).innerHTML)
    onChange(Number((event.target as Element).innerHTML))
  }
  return (      <
      PaginationBase size="sm" className="w-25" onClick={event => handlePageChange(event)}>{items}</PaginationBase>
  )
}