import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem",
  },
  ul: {
    "& > li": {
      display: "block",
    },
  },
}));

const StyledPagination = ({ currentPage, itemsPerPage, totalItems }) => {
  const classes = useStyles();

  return (
    <Pagination
      count={Math.ceil(totalItems / itemsPerPage)}
      page={+currentPage}
      color="primary"
      size="large"
      shape="rounded"
      siblingCount={0}
      boundaryCount={1}
      classes={{ root: classes.root, ul: classes.ul }}
      renderItem={(item) => (
        <PaginationItem
          component={RouterLink}
          classes={{ root: classes.paginateItem, selected: classes.selected }}
          to={`/news${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
};

StyledPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};

export default StyledPagination;
