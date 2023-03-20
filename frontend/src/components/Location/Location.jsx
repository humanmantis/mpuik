import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Done from '@mui/icons-material/Done';
import Address from '../shared/address/address';
import Map from '../shared/map/map';
import './location.scss';

function Location({
  title = 'Розташування',
  address,
  phone,
  email,
  list = [],
  latitude,
  longitude,
}) {
  return (
    <section className="location-block">
      <Container className="location-container" fixed>
        <Grid container>
          <Grid item md={6}>
            <Typography variant="h4" className="location-title" gutterBottom>
              {title}
            </Typography>
            {list.map((item) => (
              <Grid key={item.id} className="location-list-item">
                <Done className="location-done-icon" />
                <Typography variant="body1" className="location-semibold-text">
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item md={6}>
            <Address
              direction="column"
              phone={phone}
              address={address}
              email={email}
            />
          </Grid>
        </Grid>
      </Container>
      <div className="location-map-container">
        <Map location={[latitude, longitude]} />
      </div>
    </section>
  );
}

export default Location;
