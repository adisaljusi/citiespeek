import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { environment } from '../environment/environment';
export const Map = () => {

  return (
    <ReactMapGL
      mapboxApiAccessToken={environment.mapboxConfig.API_KEY}
      width={'100%'}
      height={'100%'}
    />
  );
}