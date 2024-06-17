import { useMemo } from 'react';
import { range } from '../helper';

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);

    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );

    return range(leftSiblingIndex, rightSiblingIndex);
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
