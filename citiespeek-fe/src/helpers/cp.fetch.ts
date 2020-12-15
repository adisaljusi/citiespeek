import { environment } from '../environment/environment';
import { Entry, Location } from '../models/model';

const headers = new Headers();
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Content-Type', 'application/json; charset=utf-8');

export const getEntryById = async (id: string): Promise<Entry | null> => {
  return fetch(`${environment.CP_API_URL}/location/${id}`, { method: 'GET' })
    .then(res => res.status === 200 ? res.json() : null)
    .then(res => {
      if (res != null) {
        return res as Entry;
      }

      return null;
    });
}


export const getEntries = async (): Promise<Entry[]> => {

  return fetch(`${environment.CP_API_URL}/location`, { method: 'GET', headers }, )
    .then(res => res.status === 200 ? res.json() : null)
    .then(res => {
      if (res != null) {
        return res as Entry[];
      }

      return [] as Entry[];
    });
}

export const insertEntry = async (location: Location): Promise<void> => {
  const body = JSON.stringify({
    dateTime: new Date().toISOString(),
    latitude: location.lngLat.lat,
    longitude: location.lngLat.lng
  });

  fetch(
    `${environment.CP_API_URL}/location`,
    {
      method: 'POST', body, headers
    },
  );
} 