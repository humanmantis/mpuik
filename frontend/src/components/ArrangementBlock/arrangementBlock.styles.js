import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px",
    height: "100%",
    backgroundColor: theme.palette.common.white,
    borderRadius: "1rem",
    boxShadow: "0px 7px 25px rgba(143, 134, 196, 0.03)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0px 19px 33px rgba(143, 134, 196, 0.18)",
    },
  },
  img: {
    maxWidth: '240px',
    width: '100%'
  },
  title: {
    fontWeight: 600,
    fontSize: '1.4rem',
    lineHeight: '1.5rem',
    color: theme.palette.info.main
  },
  description: {
    marginTop: '20px'
  },
  imgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '40px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '40px',
      paddingTop: 0
    }
  }
}));