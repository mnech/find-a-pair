import { paginationMax } from '../../../models/Leaderboard';
import { Pagination as PaginationBase } from 'react-bootstrap';

interface IProps {
  page: number;
  onChange: (page: number) => void;
  pageMax?: number;
}
export const Pagination = (props: IProps) => {
  const { page, onChange } = props;
  const items: JSX.Element[] = [];
  const pageMax = props.pageMax || paginationMax;

  Array.from(Array(pageMax).keys()).map((key) =>
    items.push(
      <PaginationBase.Item key={key + 1} active={key + 1 === page}>
        {key + 1}
      </PaginationBase.Item>,
    ),
  );

  const handlePageChange = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>,
  ) => {
    onChange(Number((event.target as Element).innerHTML));
  };

  return (
    <PaginationBase size="sm" className="w-25" onClick={handlePageChange}>
      {items}
    </PaginationBase>
  );
};
