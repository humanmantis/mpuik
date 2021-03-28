import React from "react";
import PropTypes from "prop-types";
import Obfuscate from "react-obfuscate";
import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const useStyles = makeStyles((theme) => ({
  subitem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2.5rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.5rem",
    },
  },
  iconContainer: {
    width: "2.5rem",
    height: "2.5rem",
    padding: ".5rem",
    marginRight: "2rem",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    transform: "scale(1.5)",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(1)",
    },
  },
  icon: {
    color: theme.palette.common.white,
  },
  link: {
    fontSize: "1.1rem",
    fontWeight: "600",
  },
}));

function AddressComponent({
  direction,
  phone,
  email,
  address,
  iconStyle,
  textStyle,
  subItem,
}) {
  const classes = useStyles();
  return (
    <Grid container direction={direction} spacing={2}>
      {address && (
        <Grid
          item
          xs={12}
          lg={direction.includes("column") ? 12 : 4}
          className={subItem || classes.subitem}
          style={subItem && { marginTop: 26 }}
        >
          <div className={iconStyle ? "" : classes.iconContainer}>
            <RoomOutlinedIcon className={iconStyle || classes.icon} />
          </div>
          <Typography
            variant="body1"
            className={textStyle || classes.link}
            component={Link}
            href={`https://www.google.com/maps?q=${address}`}
          >
            {address}
          </Typography>
        </Grid>
      )}
      {email && (
        <Grid
          item
          xs={12}
          lg={direction.includes("column") ? 12 : 4}
          className={subItem || classes.subitem}
        >
          <div className={iconStyle ? "" : classes.iconContainer}>
            <EmailOutlinedIcon className={iconStyle || classes.icon} />
          </div>
          <Typography variant="body1">
            <Link
              className={textStyle || classes.link}
              component={Obfuscate}
              email={email}
            />
          </Typography>
        </Grid>
      )}
      {phone && (
        <Grid
          item
          xs={12}
          lg={direction.includes("column") ? 12 : 4}
          className={subItem || classes.subitem}
        >
          <div className={iconStyle ? "" : classes.iconContainer}>
            <PhoneOutlinedIcon className={iconStyle || classes.icon} />
          </div>
          <Typography variant="body1">
            <Link
              className={textStyle || classes.link}
              component={Obfuscate}
              tel={phone}
            />
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

AddressComponent.defaultProps = {
  direction: "column",
};

AddressComponent.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
};

export default AddressComponent;
