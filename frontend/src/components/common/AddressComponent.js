import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import MsgIcon from "../../assets/icons/msg.png";
import PhoneIcon from "../../assets/icons/phone.png";
import LocationIcon from "../../assets/icons/location.png";

const useStyles = makeStyles((theme) => ({
  addressItem: {
    // flexBasis: "auto",
  },
  itemTypography: {
    marginLeft: 10,
  },
  typography: {
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
}));

function AddressComponent(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} {...props}>
      <Grid item className={classes.addressItem} xs={12}>
        <Grid container alignItems="center">
          <Grid>
            <img src={LocationIcon} alt="location" />
          </Grid>
          <Grid className={classes.itemTypography}>
            <Typography className={classes.typography}>Адреса</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.addressItem} xs={12}>
        <Grid container alignItems="center">
          <Grid>
            <img src={MsgIcon} alt="location" />
          </Grid>
          <Grid className={classes.itemTypography}>
            <Typography className={classes.typography}>
              mpuik.support@chnu.edu.ua
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.addressItem} xs={12}>
        <Grid container alignItems="center">
          <Grid>
            <img src={PhoneIcon} alt="location" />
          </Grid>
          <Grid className={classes.itemTypography}>
            <Typography className={classes.typography}>
              +38 012 34 56 789
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddressComponent;
