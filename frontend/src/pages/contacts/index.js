import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Layout from "../../components/common/Layout";

import AddressComponent from "../../components/common/AddressComponent";

const useStyles = makeStyles((theme) => ({
  addressItem: {
    flexBasis: "auto",
  },
  typography: {
    fontWeight: 600,
  },
  relativeContainer: {
    position: "relative",
    marginTop: 100,
  },
  imgContainer: {
    maxWidth: "80%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  inputContainer: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  input: {
    width: "100%",
  },
  img: {
    minWidth: "100%",
    minHeight: 600,
    background: "grey",
    borderRadius: 10,
  },
  form: {
    background: "white",
    borderRadius: 10,
    maxWidth: 600,
    width: "100%",
    padding: "60px 40px",
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    [theme.breakpoints.down("sm")]: {
      position: "initial",
      transform: "translateY(0%)",
      marginTop: 40,
    },
  },
  mt30: {
    marginTop: 30,
  },
  textarea: {
    width: "100%",
  },
  title: {
    fontWeight: 600,
    fontSize: 34,
    lineHeight: "46px",
    color: "#06040A",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonInner: {
    padding: "10px 40px",
  },
}));

function Contacts() {
  const classes = useStyles();
  return (
    <Layout
      title="Контакти"
      subtitle="Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст"
    >
      <AddressComponent justify="space-between" />
      <div className={classes.relativeContainer}>
        <div className={classes.imgContainer}>
          <img src="lala" alt="" className={classes.img} />
        </div>
        <form className={classes.form} noValidate autoComplete="off">
          <Typography className={classes.title}>Напишіть нам</Typography>
          <Grid container justify="space-between" spacing={2}>
            <Grid
              item
              xs={12}
              className={`${classes.addressItem} ${classes.inputContainer} ${classes.mt30}`}
            >
              <TextField
                label="Прізвище та ім’я"
                defaultValue="Іван Іванов"
                className={classes.input}
              />
            </Grid>
            <Grid
              item
              xs={12}
              className={`${classes.addressItem} ${classes.inputContainer} ${classes.mt30}`}
            >
              <TextField
                label="Електронна пошта"
                defaultValue="ivanivanov@mail.com"
                className={classes.input}
              />
            </Grid>
          </Grid>
          <TextField
            label="Повідомлення"
            multiline
            rows={4}
            className={`${classes.mt30} ${classes.textarea}`}
            defaultValue="Доброго дня, "
            variant="outlined"
          />
          <div className={`${classes.button} ${classes.mt30}`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonInner}
            >
              Надіслати
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Contacts;
