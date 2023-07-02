import React from 'react';
import Obfuscate from 'react-obfuscate';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RoomOutlined from '@mui/icons-material/RoomOutlined';
import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import './address.scss';
import Link from '../link/link';

function Address({
  direction = 'column',
  justifyContent= 'start',
  phone,
  email,
  address,
  iconStyle,
  iconContainerStyle,
  textStyle,
  subItemStyle,
}) {
  return (
    <Grid container direction={direction} justifyContent={justifyContent} spacing={2} className="address">
      {address && (
        <Grid
          item
          xs={12}
          lg={direction.includes('column') ? 12 : 5}
          className={subItemStyle || 'sub-item'}
          style={subItemStyle && { marginTop: 26 }}
        >
          <div
            className={
              iconContainerStyle ? iconContainerStyle : 'icon-container'
            }
          >
            <RoomOutlined className={iconStyle ? iconStyle : 'icon'} />
          </div>
          <Typography
            variant="body1"
            className={textStyle || 'link'}
            component={Link}
            target="_blank"
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
          lg={direction.includes('column') ? 12 : 3}
          className={subItemStyle || 'sub-item'}
        >
          <div
            className={
              iconContainerStyle ? iconContainerStyle : 'icon-container'
            }
          >
            <EmailOutlined className={iconStyle ? iconStyle : 'icon'} />
          </div>
          <Typography variant="body1">
            <Obfuscate
              element={Link}
              className={textStyle || 'link'}
              to={`mailto:${email}`}
            >
              {email}
            </Obfuscate>
          </Typography>
        </Grid>
      )}
      {phone && (
        <Grid
          item
          xs={12}
          lg={direction.includes('column') ? 12 : 3}
          className={subItemStyle || 'sub-item'}
        >
          <div
            className={
              iconContainerStyle ? iconContainerStyle : 'icon-container'
            }
          >
            <PhoneOutlined className={iconStyle ? iconStyle : 'icon'} />
          </div>
          <Typography variant="body1">
            <Obfuscate
              element={Link}
              className={textStyle || 'link'}
              to={`tel:${phone}`}
            >
              {phone}
            </Obfuscate>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default Address;
