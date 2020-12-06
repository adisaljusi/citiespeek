import { LngLat } from 'mapbox-gl';
import { environment } from '../environment/environment';

const generateObservationAPI_URL = (lngLat: LngLat): string =>
  `${environment.hereDestinationWeatherConfig.URI}?product=observation&latitude=${lngLat.lat}&longitude=${lngLat.lng}&oneobservation=true&apiKey=${environment.hereDestinationWeatherConfig.API_KEY}`;

export const getWeatherObservation = async (lngLat: LngLat) => {
  return fetch(generateObservationAPI_URL(lngLat), { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
}