import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import { environment } from '../environment/environment';

const styles = {
  width: "100%",
  height: "100%"
};

export const Map = () => {
  let mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    mapboxgl.accessToken = environment.mapboxConfig.API_KEY;
    new mapboxgl.Map({
      container: mapContainer.current as HTMLElement | string,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [0, 0],
      zoom: 5
    })

    if (map) {
      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    }
  }, []);


  return (
    <div id="map" style={styles} ref={mapContainer}></div>
  );
}