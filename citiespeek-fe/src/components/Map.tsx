import { LngLat } from 'mapbox-gl';
import React, { useCallback, useRef, useState } from 'react';
import { FlyToInterpolator, InteractiveMap, Marker, MarkerProps, PointerEvent, ViewportProps } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { environment } from '../environment/environment';
import '../styles/Map.css';
import markerImage from './marker.svg';

interface Props {
  readonly findLocation: (lngLat: LngLat) => void;
}

export const Map: React.FC<Props> = ({ findLocation: handleOnMapClick }) => {
  const mapRef = useRef<InteractiveMap>(null);
  const [viewport, setViewport] = useState({
    latitude: 37.7510189888697,
    longitude: -122.44847954400961,
    zoom: 12
  } as Partial<ViewportProps>)
  const [marker, setMarker] = useState<MarkerProps | null>(null);

  const handleViewportChange = useCallback((viewport: Partial<ViewportProps>) => setViewport(viewport), []);

  const handleViewportChangeGeocoder = useCallback((viewport: Partial<ViewportProps>) => {
    setViewport(viewport);
    const { longitude, latitude } = viewport;

    if (longitude && latitude) {
      setMarker({ longitude, latitude });
    }
  }, []);

  const handleMapOnClick = (event: PointerEvent) => {
    event.preventDefault();
    const [longitude, latitude] = event.lngLat;
    setMarker({ longitude, latitude });
    setViewport({
      ...viewport,
      longitude,
      latitude,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator()
    });
    handleOnMapClick(new LngLat(longitude, latitude));
  }

  return (
    <InteractiveMap
      {...viewport}
      ref={mapRef}
      mapboxApiAccessToken={environment.mapboxConfig.API_KEY}
      onViewportChange={handleViewportChange}
      width={'100%'}
      height={'100%'}
      onClick={handleMapOnClick}
    >
      <Geocoder
        mapRef={mapRef}
        mapboxApiAccessToken={environment.mapboxConfig.API_KEY}
        onViewportChange={handleViewportChangeGeocoder}
        position="top-right"
        marker={false}
      />
      {
        marker != null && (
          <Marker {...marker}>
            <div className="markerImageWrapper">
              <img className="markerImage" src={markerImage} alt="marker" />
            </div>
          </Marker>
        )
      }
    </InteractiveMap>
  );
}