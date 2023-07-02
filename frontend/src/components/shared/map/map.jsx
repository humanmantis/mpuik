import React from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import config from '../../../config/map.config';

function Map({ position = config.position }) {
  let icon = null;

  if (typeof window !== 'undefined') {
    icon = Leaflet.icon({
      iconUrl: '/icons/pin.svg',
      iconSize: [80, 80],
      iconAnchor: [40, 40],
    });
  }
  

  return (
    <MapContainer
      center={position}
      zoom={config.zoom}
      scrollWheelZoom={true}
      style={{ height: '100%', borderRadius: '1rem', overflow: 'hidden' }}
    >
      <TileLayer
        attribution={config.attribution}
        url={config.url}
      />
      <Marker position={position} icon={icon}></Marker>
    </MapContainer>
  );
}

Map.defaultProps = {
  position: config.position,
};

export default Map;
