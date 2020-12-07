import { LngLat } from 'mapbox-gl';

export interface Image {
  readonly alt: string;
  readonly src: string;
}

export interface Location {
  readonly city: string;
  readonly state: string;
  readonly country: string;
  readonly lngLat: LngLat;
  readonly observations: Observations;
}

export interface Observations {
  readonly temperature: number;
  readonly iconName: string;
  readonly skyDescription: string;
}
