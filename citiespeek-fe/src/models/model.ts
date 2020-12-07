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
  readonly observation: Observation;
}

export interface Observation {
  readonly temperature: number;
  readonly skyDescription: WeatherType;
}

// Schema for WeatherItemsType can be found on https://developer.here.com/documentation/destination-weather/dev_guide/topics/resource-type-weather-items.html
export type WeatherType =
  | 'Sunny'
  | 'Clear'
  | 'Mostly Sunny'
  | 'Mostly Clear'
  | 'Hazy Sunshine'
  | 'Haze'
  | 'Passing Clouds'
  | 'More Sun than Clouds'
  | 'Scattered Clouds'
  | 'Partly Cloudy'
  | 'A Mixture of Sun and Clouds'
  | 'High Level Clouds'
  | 'More Clouds than Sun'
  | 'Partly Sunny'
  | 'Broken Clouds'
  | 'Mostly Cloudy'
  | 'Cloudy'
  | 'Overcast'
  | 'Low Clouds'
  | 'Light Fog'
  | 'Fog'
  | 'Dense Fog'
  | 'Ice Fog'
  | 'Sandstorm'
  | 'Duststorm'
  | 'Increasing Cloudiness'
  | 'Decreasing Cloudiness'
  | 'Clearing Skies'
  | 'Breaks of Sun Later'
  | 'Early Fog Followed by Sunny'
  | 'Afternoon Clouds'
  | 'Morning Clouds'
  | 'Smoke'
  | 'Low Level Haze'
;

export type WeatherIconMap = {
  readonly [key in WeatherType]: string;
}