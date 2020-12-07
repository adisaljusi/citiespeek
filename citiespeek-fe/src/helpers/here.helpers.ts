import { LngLat } from 'mapbox-gl';
import { environment } from '../environment/environment';
import { Location } from '../models/model';

const generateObservationAPI_URL = (lngLat: LngLat): string =>
  `${environment.hereDestinationWeatherConfig.URI}?product=observation&latitude=${lngLat.lat}&longitude=${lngLat.lng}&oneobservation=true&apiKey=${environment.hereDestinationWeatherConfig.API_KEY}`;

export const getWeatherObservation = async (lngLat: LngLat): Promise<Location | null> => {
  return fetch(generateObservationAPI_URL(lngLat), { method: 'GET' })
    .then(res => res.status === 200 ? res.json() : null)
    .then(res => {
      if (res != null) {
        const { city, state, country, icon_name, temperature, skyDescription } = res.observations.location[0].observation[0];

        return {
          city,
          state,
          country,
          lngLat,
          observation: {
            iconName: icon_name,
            temperature: Number(temperature),
            skyDescription
          }
        } as Location;
      }

      return null;
    });
}