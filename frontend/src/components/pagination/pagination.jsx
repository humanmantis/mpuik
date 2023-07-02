import React from 'react';
import Stack from '@mui/material/Stack';
import MuiPagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Link from '../shared/link/link';

const Pagination = ({ currentPage, totlaPages, pathPrefix }) => {
  return (
    <Stack alignItems="center" style={{ marginBottom: '3rem' }}>
      <MuiPagination
        count={totlaPages}
        page={currentPage}
        color="primary"
        size="large"
        shape="rounded"
        siblingCount={0}
        boundaryCount={1}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${typeof pathPrefix === 'function' ? pathPrefix(item) : pathPrefix}${item.page === 1 ? '' : `/${item.page}`}`}
            underline="none"
            {...item}
          />
        )}
      />
    </Stack>
  );
};

export default Pagination;
