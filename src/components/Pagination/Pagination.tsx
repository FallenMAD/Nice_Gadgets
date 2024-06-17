import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from '../../icons';

import './Pagination.scss';
import { usePagination } from '../../hooks';

type Props = {
  currentPage: number;
  onPageChange: (value: number) => void;
  itemPerPage: number;
  totalItems: number;
};

export const Pagination: FC<Props> = ({
  currentPage,
  totalItems,
  onPageChange,
  itemPerPage,
}) => {
  const siblingItem = 2;
  const paginationRange = usePagination({
    totalCount: totalItems,
    pageSize: itemPerPage,
    siblingCount: siblingItem,
    currentPage,
  });

  const handleChangePrev = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    onPageChange(currentPage - 1);
  };

  const handleChangeNext = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    onPageChange(currentPage + 1);
  };

  const handleChangePage = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    number: number,
  ) => {
    e.preventDefault();
    onPageChange(number);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <>
      <ul className="pagination" data-cy="pagination">
        <>
          <li className="pagination__item pagination__item--left">
            <Link
              className={cn('pagination__link', {
                disabled: currentPage === 1,
              })}
              data-cy="paginationLeft"
              to={`${currentPage}`}
              onClick={e => handleChangePrev(e)}
            >
              {currentPage <= 1 ? <ArrowLeft color="#b4bdc3" /> : <ArrowLeft />}
            </Link>
          </li>
          <ul className="pagination__list">
            {paginationRange.map(number => (
              <li key={number} className="pagination__list-item">
                <Link
                  className={cn('pagination__link', {
                    pagination__active: currentPage === number,
                  })}
                  to={`${number}`}
                  onClick={e => handleChangePage(e, number)}
                >
                  {number}
                </Link>
              </li>
            ))}
          </ul>
          <li className="pagination__item pagination__item--rigth">
            <Link
              className={cn('pagination__link', {
                pagination__disabled: currentPage === lastPage,
              })}
              data-cy="paginationRight"
              to={`${currentPage + 1}`}
              onClick={e => handleChangeNext(e)}
            >
              {currentPage === lastPage ? (
                <ArrowRight color="#b4bdc3" />
              ) : (
                <ArrowRight />
              )}
            </Link>
          </li>
        </>
      </ul>
    </>
  );
};
