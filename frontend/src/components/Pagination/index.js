import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  pagination: {
    marginTop: 50,
    marginBottom: 80,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paginateItem: {
    width: 40,
    height: 40,
    minWidth: 0,
    borderRadius: 10,
    color: "#000000",
  },
  paginateActiveItem: {
    background: "#0D6F93",
    color: "#FDFDFD",
    "&:hover": {
      background: "#0D6F93",
    },
  },
  buttonText: {
    borderRadius: 10,
    margin: "0 10px",
    background: " #ffffff",
    padding: "5px 10px",
    "&:hover": {
      background: "#ffffff",
    },
  },
});

const Pagination = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const styles = useStyles();
  const maxNumber = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= maxNumber; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <Button
        disabled={currentPage === 1}
        onClick={(e) => paginate(e, currentPage - 1)}
        className={styles.buttonText}
      >
        Назад
      </Button>
      {pageNumbers.map((number) => (
        <Button
          size="small"
          key={number}
          onClick={(e) => paginate(e, number)}
          className={`${styles.paginateItem} ${
            currentPage === number ? styles.paginateActiveItem : ""
          }`}
        >
          {number}
        </Button>
      ))}
      <Button
        disabled={currentPage === maxNumber}
        onClick={(e) => paginate(e, currentPage + 1)}
        className={styles.buttonText}
      >
        Далі
      </Button>
    </div>
  );
};

export default Pagination;
