import React, { useState } from 'react';
import ReactMapGL, { ViewportProps } from 'react-map-gl';
import { environment } from '../environment/environment';

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7510189888697,
    longitude: -122.44847954400961,
    zoom: 12
  } as Partial<ViewportProps>)

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={environment.mapboxConfig.API_KEY}
      onViewportChange={setViewport}
      width={'100%'}
      height={'100%'}
    />
  );
}