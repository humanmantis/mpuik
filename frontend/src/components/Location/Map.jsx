import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { makeStyles } from '@material-ui/core';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PinSvg from '../../assets/icons/pin.svg';
import config from '../../config/map.config';

const useStyles = makeStyles(() => ({
  map: {
    height: '100%',
    borderRadius: '1rem',
    overflow: 'hidden'
  }
}));

function Map({ position }) {
  const classes = useStyles();
  const icon = Leaflet.icon({
    iconUrl: PinSvg,
    iconSize: [80, 80],
    iconAnchor: [40, 40]
  });

  return (
    <MapContainer
      center={position}
      zoom={config.zoom}
      scrollWheelZoom={false}
      className={classes.map}
    >
      <TileLayer attribution={config.attribution} url={process.env.REACT_APP_MAP_API_URI} />
      <Marker position={position} icon={icon}></Marker>
    </MapContainer>
  );
}

Map.defaultProps = {
  position: config.position
};

Map.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number)
};

export default Map;
