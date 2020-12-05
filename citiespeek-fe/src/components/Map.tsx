import React, { useCallback, useRef, useState } from 'react';
import { InteractiveMap, Marker, MarkerProps, PointerEvent, ViewportProps } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { environment } from '../environment/environment';
import markerImage from './marker.svg';

export const Map = () => {
  const mapRef = useRef<InteractiveMap>(null);
  const [viewport, setViewport] = useState({
    latitude: 37.7510189888697,
    longitude: -122.44847954400961,
    zoom: 12
  } as Partial<ViewportProps>)
  const [marker, setMarker] = useState<MarkerProps | null>(null);

  const handleViewportChange = useCallback((viewport: Partial<ViewportProps>) => setViewport(viewport), []);

  const handleMapOnClick = (event: PointerEvent) => {
    event.preventDefault();
    const [longitude, latitude] = event.lngLat;
    setMarker({ longitude, latitude });
  }

  return (
    <InteractiveMap
      {...viewport}
      ref={mapRef}
      mapboxApiAccessToken={environment.mapboxConfig.API_KEY}
      onViewportChange={handleViewportChange}
      width={'100%'}
      height={'100%'}
      onClick={handleMapOnClick}>
      <Geocoder
        mapRef={mapRef}
        mapboxApiAccessToken={environment.mapboxConfig.API_KEY}
        onViewportChange={handleViewportChange}
        position="top-right"
      />
      {
        marker != null && (
          <Marker {...marker}>
            <div>
              <img src={markerImage} />
            </div>
          </Marker>
        )
      }
    </InteractiveMap>
  );
}