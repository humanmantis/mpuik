import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, makeStyles, Container } from "@material-ui/core";
import Logo from "../common/Logo";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Youtube from "../../assets/youtube.png";
import Twitter from "../../assets/twitter.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddressComponent from "../common/AddressComponent";

const useStyles = makeStyles((theme) => ({
  footerTop: {
    background: theme.palette.primary.light,
    padding: "100px 20px",
  },
  gridTop: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  gridLeft: {
    flex: "0 1 30%",
    [theme.breakpoints.down("md")]: {
      flex: "0 1 33%",
    },
  },
  gridRight: {
    flex: "0 1 65%",
  },
  description: {
    marginTop: 30,
    fontSize: 18,
    lineHeight: "28px",
    ["@media (max-width:700px)"]: {
      textAlign: "center",
    },
  },
  socialNetworks: {
    maxWidth: 300,
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 30px",
    },
    ["@media (max-width:700px)"]: {
      margin: "20px auto 30px",
    },
  },
  socialNetwork: {
    borderRadius: 14,
    padding: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    transition: ".3s all ease",
    "&:hover": {
      background: "#FFDDED",
    },
  },
  categoryTitle: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "27px",
    textTransform: "uppercase",
    color: "#730438",
  },
  link: {
    fontSize: 16,
    lineHeight: "22px",
    color: "#730438",
    margin: "26px 0",
    display: "block",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    ["@media (max-width:700px)"]: {
      margin: "13px 0",
    },
  },
  textStyle: {
    fontSize: 16,
    lineHeight: "22px",
    color: "#730438",
  },
  icon: {
    color: "#730438",
    marginRight: 20,
  },
  bottomItemLeft: {
    padding: "25px 0",
    flex: "0 1 50%",
    [theme.breakpoints.down("sm")]: {
      flex: "0 1 100%",
      textAlign: "center",
      padding: "15px 0",
    },
  },
  bottomItemRight: {
    padding: "25px 0",
    flex: "0 1 50%",
    [theme.breakpoints.down("sm")]: {
      flex: "0 1 100%",
      textAlign: "center",
      padding: "15px 0",
    },
  },
  bottomEnd: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  gridItem: {
    ["@media (max-width:700px)"]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 40,
    },
  },
  gridContainer: {
    ["@media (max-width:700px)"]: {
      display: "block",
    },
  },
  subitem: {
    marginBottom: 10,
    ["@media (max-width:700px)"]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  flex: {
    ["@media (max-width:700px)"]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const items = [
  { title: "Про нас", link: "/" },
  { title: "Контакти", link: "/" },
  { title: "Спеціальності", link: "/" },
  { title: "Новини", link: "/" },
];

const items2 = [{ title: "Дистанційне навчання", link: "/" }];

const location = {
  phone: "+38 012 34 56 789",
  email: "mpuik.support@chnu.edu.ua",
  address: "Адреса",
};

function Footer() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.footerTop}>
        <Container>
          <Grid container justify="space-between" className={styles.gridTop}>
            <Grid item xs={12} className={styles.gridLeft}>
              <Logo mobileStyle={styles.flex} />
              <Typography className={styles.description}>
                Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                Текст Текст Текст Текст Текст Текст Текст Текст
              </Typography>
              <Grid
                container
                justify="space-between"
                className={styles.socialNetworks}
              >
                <Grid item>
                  <a href="#" className={styles.socialNetwork}>
                    <img
                      src={Facebook}
                      alt="img"
                      className={styles.socialNetworkImg}
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a href="#" className={styles.socialNetwork}>
                    <img
                      src={Youtube}
                      alt="img"
                      className={styles.socialNetworkImg}
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a href="#" className={styles.socialNetwork}>
                    <img
                      src={Twitter}
                      alt="img"
                      className={styles.socialNetworkImg}
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a href="#" className={styles.socialNetwork}>
                    <img
                      src={Linkedin}
                      alt="img"
                      className={styles.socialNetworkImg}
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a href="#" className={styles.socialNetwork}>
                    <img
                      src={Instagram}
                      alt="img"
                      className={styles.socialNetworkImg}
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={styles.gridRight}>
              <Grid
                container
                justify="space-between"
                className={styles.gridContainer}
              >
                <Grid item className={styles.gridItem}>
                  <Typography className={styles.categoryTitle}>
                    МПУіК
                  </Typography>
                  {items.map((item) => (
                    <Link
                      to={item.link}
                      key={item.title}
                      className={styles.link}
                    >
                      {item.title}
                    </Link>
                  ))}
                </Grid>
                <Grid item className={styles.gridItem}>
                  <Typography className={styles.categoryTitle}>
                    Ресурси
                  </Typography>
                  {items2.map((item) => (
                    <Link
                      to={item.link}
                      key={item.title}
                      className={styles.link}
                    >
                      {item.title}
                    </Link>
                  ))}
                </Grid>
                <Grid item className={styles.gridItem}>
                  <Typography className={styles.categoryTitle}>
                    Зв’яжіться з нами
                  </Typography>
                  <AddressComponent
                    direction="column"
                    address={location.address}
                    phone={location.phone}
                    email={location.email}
                    iconStyle={styles.icon}
                    textStyle={styles.textStyle}
                    subItem={styles.subitem}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <Grid container justify="space-between">
          <Grid item xs={12} className={styles.bottomItemLeft}>
            <Typography>Кафедра МПУіК - © 2021 Всі права захищено</Typography>
          </Grid>
          <Grid item xs={12} className={styles.bottomItemRight}>
            <Typography className={styles.bottomEnd}>
              Made with{" "}
              <FavoriteIcon style={{ color: "red" }} fontSize="small" /> by Max
              Floreskul, Valera Kalenchuk
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
