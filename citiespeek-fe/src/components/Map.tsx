import React, { useRef, useState } from 'react';
import ReactMapGL, { InteractiveMap, ViewportProps } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { environment } from '../environment/environment';

export const Map = () => {
  const mapRef = useRef<InteractiveMap>(null);
  const [viewport, setViewport] = useState({
    latitude: 37.7510189888697,
    longitude: -122.44847954400961,
    zoom: 12
  } as Partial<ViewportProps>)

  return (
    <ReactMapGL
      {...viewport}
      ref={mapRef}
      mapboxApiAccessToken={environment.mapboxConfig.API_KEY}
      onViewportChange={setViewport}
      width={'100%'}
      height={'100%'}
    >
      <Geocoder
        mapRef={mapRef}
        mapboxApiAccessToken={environment.mapboxConfig.API_KEY}
        position="top-left"
      />
    </ReactMapGL>
  );
}