import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import { environment } from '../environment/environment';

const styles = {
  width: "100%",
  height: "calc(100% - 64px)"
};

export const Map = () => {
  let mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    mapboxgl.accessToken = environment.mapboxConfig.API_KEY;
    new mapboxgl.Map({
      container: mapContainer.current as HTMLElement | string,
      style: "mapbox://styles/mapbox/light-v10", // stylesheet location
      center: [-122.44847954400961,  37.75101898886977],
      zoom: 5
    })

    if (map) {
      map.on("load", () => {
        setMap(map);
        // map.addControl('')
        map.resize();
      });
    }
  }, []);


  return (
    <div id="map" style={styles} ref={mapContainer}></div>
  );
}