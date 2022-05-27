import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "800px",
    width: "100%",
    padding: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    borderRadius: "1rem",
    boxShadow: "0px 7px 25px rgba(143, 134, 196, 0.03)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0px 19px 33px rgba(143, 134, 196, 0.18)",
    },
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.info.main,
    fontSize: "30px"
  },
  gridWrapper: {
    margin: "1rem 30px 10px",
    width: '100%'
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main
  },
  boldLink: {
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '38px'
  },
  text: {
    fontSize: '24px'
  }
}));