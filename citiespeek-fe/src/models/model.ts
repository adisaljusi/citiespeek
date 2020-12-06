import { LngLat } from 'mapbox-gl';

export interface Image {
  readonly alt: string;
  readonly src: string;
}

export interface Location {
  readonly city: string;
  readonly country: string;
  readonly lngLat: LngLat;
}