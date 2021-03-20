import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AddressComponent from "../../components/common/AddressComponent";
import Layout from "../../components/common/Layout";

import Tick from "../../assets/icons/tick.png";

const items = [
  "Освітня програма",
  "Освітня програма",
  "Освітня програма",
  "Освітня програма",
  "Освітня програма",
];

const items2 = [
  "Текст Текст1",
  "Текст Текст2",
  "Текст Текст3",
  "Текст Текст4",
  "Текст Текст5",
];

const useStyles = makeStyles({
  infoItem: {
    borderRadius: 14,
    maxWidth: 380,
    minWidth: 300,
    flexBasis: "auto",
    background: "#ffffff",
    margin: "20px 10px",
    padding: 0,
  },
  infoItemInner: {
    padding: 20,
  },
  infoItemTitle: {
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "42px",
    color: "#ffffff",
  },
  infoItemSubtitle: {
    fontWeight: 600,
  },
  infoItemSubtitleValue: {
    fontSize: 16,
    lineHeight: "28px",
    color: "#FFFFFF",
  },
  infoItemTop: {
    background: "#0D6F93",
    borderRadius: "14px 14px 0 0",
  },
  infoItemBottomText: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "28px",
    color: "#0D6F93",
  },
  location: {
    marginTop: 100,
  },
  locationTextContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
  },
  tick: {
    width: 20,
    height: 20,
  },
  locationItem: {
    flexBasis: "auto",
    margin: 10,
  },
  locationTitle: {
    fontWeight: 600,
    fontSize: 48,
    lineHeight: "65px",
    color: "#06040A",
    marginBottom: 20,
  },
  locationText: {
    fontWeight: 600,
    fontSize: 18,
    lineHeight: "32px",
    color: "#06040A",
    marginLeft: 40,
  },
  bottomImgContainer: {
    margin: "80px 0",
  },
  bottomImg: {
    minWidth: "100%",
    maxHeight: 600,
    minHeight: 300,
    height: "100%",
    background: "gray",
    borderRadius: 14,
  },
});

function EducationalLevels() {
  const styles = useStyles();
  return (
    <Layout
      title="Освітні рівні"
      subtitle="Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст"
    >
      <Grid container justify="center">
        <Grid item xs={12} className={styles.infoItem}>
          <div className={`${styles.infoItemInner} ${styles.infoItemTop}`}>
            <Typography className={styles.infoItemTitle}>
              Бакалавр - Комп’ютерні науки
            </Typography>
            <Typography className={styles.infoItemSubtitleValue}>
              <span className={styles.infoItemSubtitle}>Спеціалізація:</span>
              Алгоритмічне та програмне забезпечення комп’ютерних систем
            </Typography>

            <Typography className={styles.infoItemSubtitleValue}>
              <span className={styles.infoItemSubtitle}>Термін навчання:</span>3
              роки 10 місяців
            </Typography>
          </div>
          <div className={styles.infoItemInner}>
            {items.map((item, index) => (
              <Typography
                key={`${item} ${index}`}
                className={styles.infoItemBottomText}
              >
                {item}
              </Typography>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} className={styles.infoItem}>
          <div className={`${styles.infoItemInner} ${styles.infoItemTop}`}>
            <Typography className={styles.infoItemTitle}>
              Бакалавр - Комп’ютерні науки
            </Typography>
            <Typography className={styles.infoItemSubtitleValue}>
              <span className={styles.infoItemSubtitle}>Спеціалізація:</span>
              Алгоритмічне та програмне забезпечення комп’ютерних систем
            </Typography>

            <Typography className={styles.infoItemSubtitleValue}>
              <span className={styles.infoItemSubtitle}>Термін навчання:</span>3
              роки 10 місяців
            </Typography>
          </div>
          <div className={styles.infoItemInner}>
            {items.map((item, index) => (
              <Typography
                key={`${item} ${index}`}
                className={styles.infoItemBottomText}
              >
                {item}
              </Typography>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} className={styles.infoItem}>
          <div className={`${styles.infoItemInner} ${styles.infoItemTop}`}>
            <Typography className={styles.infoItemTitle}>
              Бакалавр - Комп’ютерні науки
            </Typography>
            <Typography className={styles.infoItemSubtitleValue}>
              <span className={styles.infoItemSubtitle}>Спеціалізація:</span>
              Алгоритмічне та програмне забезпечення комп’ютерних систем
            </Typography>

            <Typography className={styles.infoItemSubtitleValue}>
              <span className={styles.infoItemSubtitle}>Термін навчання:</span>3
              роки 10 місяців
            </Typography>
          </div>
          <div className={styles.infoItemInner}>
            {items.map((item, index) => (
              <Typography
                key={`${item} ${index}`}
                className={styles.infoItemBottomText}
              >
                {item}
              </Typography>
            ))}
          </div>
        </Grid>
      </Grid>
      <div className={styles.location}>
        <Typography className={styles.locationTitle}>Розташування</Typography>
        <Grid container spacing={1} justify="space-between">
          <Grid
            item
            sm={12}
            className={styles.locationItem}
            style={{ padding: 12 }}
          >
            {items2.map((item, index) => (
              <div
                key={`${item} ${index}`}
                className={styles.locationTextContainer}
              >
                <img src={Tick} alt="tick" className={styles.tick} />
                <Typography className={styles.locationText}>{item}</Typography>
              </div>
            ))}
          </Grid>
          <Grid item sm={12} className={styles.locationItem}>
            <AddressComponent style={{ display: "block" }} />
          </Grid>
        </Grid>
      </div>
      <div className={styles.bottomImgContainer}>
        <img src="lala" alt="" className={styles.bottomImg} />
      </div>
    </Layout>
  );
}

export default EducationalLevels;
