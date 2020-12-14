import { environment } from '../environment/environment';
import { Entry, Location } from '../models/model';

export const getLocationById = async (id: string): Promise<Entry | null> => {
  return fetch(`${environment.CP_API_URL}/location/${id}`, { method: 'GET' })
    .then(res => res.status === 200 ? res.json() : null)
    .then(res => {
      if (res != null) {
        return res as Entry;
      }

      return null;
    });
}


export const getLocations = async (): Promise<Entry[]> => {
  return fetch(`${environment.CP_API_URL}/location`, { method: 'GET' })
    .then(res => res.status === 200 ? res.json() : null)
    .then(res => {
      if (res != null) {
        return res as Entry[];
      }

      return [] as Entry[];
    });
}

export const insertLocation = async (location: Location): Promise<void> => {
  const body = JSON.stringify({
    dateTime: new Date().toISOString(),
    latitude: location.lngLat.lat,
    longitude: location.lngLat.lng
  });

  fetch(
    `${environment.CP_API_URL}/location`,
    { method: 'POST', body },
  );
} 