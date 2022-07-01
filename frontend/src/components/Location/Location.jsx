import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Container, Grid, Typography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import AddressComponent from './../common/AddressComponent';
import Map from './Map';

const useStyles = makeStyles((theme) => ({
  locationContainer: {
    marginTop: '6rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem'
    }
  },
  location: {
    marginBottom: '3rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.5rem'
    }
  },
  subitem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2.5rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.5rem'
    }
  },
  listitem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.5rem'
    }
  },
  iconContainer: {
    width: '2.5rem',
    height: '2.5rem',
    padding: '.5rem',
    marginRight: '2rem',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    transform: 'scale(1.5)',
    [theme.breakpoints.down('md')]: {
      transform: 'scale(1)'
    }
  },
  icon: {
    color: theme.palette.common.white
  },
  doneIcon: {
    width: '1.5rem',
    height: '1.5rem',
    color: theme.palette.success.main,
    marginRight: '1rem'
  },
  semiboldText: {
    fontWeight: '600'
  },
  title: {
    fontWeight: '600',
    color: theme.palette.primary.main
  },
  link: {
    fontSize: '1.1rem',
    fontWeight: '600'
  },
  mapContainer: {
    height: '500px',
    [theme.breakpoints.down('md')]: {
      height: '300px'
    }
  }
}));

function Location({ title, address, phone, email, list, latitude, longitude }) {
  const classes = useStyles();
  return (
    <section className={classes.locationContainer}>
      <Container className={classes.location} fixed>
        <Grid container>
          <Grid item md={6}>
            <Typography variant="h4" className={classes.title} gutterBottom>
              {title}
            </Typography>
            {list.map((item) => (
              <Grid key={item.id} className={classes.listitem}>
                <DoneIcon className={classes.doneIcon} />
                <Typography variant="body1" className={classes.semiboldText}>
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item md={6}>
            <AddressComponent direction="column" phone={phone} address={address} email={email} />
          </Grid>
        </Grid>
      </Container>
      <div className={classes.mapContainer}>
        {' '}
        <Map location={[latitude, longitude]} />
      </div>
    </section>
  );
}

Location.defaultProps = {
  title: 'Розташування',
  list: []
};

Location.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
};

export default Location;
