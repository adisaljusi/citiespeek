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
  | 'sunny'
  | 'clear'
  | 'mostlysunny'
  | 'mostlyclear'
  | 'hazysunshine'
  | 'haze'
  | 'passingclouds'
  | 'moresunthanclouds'
  | 'scatteredclouds'
  | 'partlycloudy'
  | 'amixtureofsunandclouds'
  | 'highlevelclouds'
  | 'morecloudsthansun'
  | 'partlysunny'
  | 'brokenclouds'
  | 'mostlycloudy'
  | 'cloudy'
  | 'overcast'
  | 'lowclouds'
  | 'lightfog'
  | 'fog'
  | 'densefog'
  | 'icefog'
  | 'sandstorm'
  | 'duststorm'
  | 'increasingcloudiness'
  | 'decreasingcloudiness'
  | 'clearingskies'
  | 'breaksofsunlater'
  | 'earlyfogfollowedbysunny'
  | 'afternoonclouds'
  | 'morningclouds'
  | 'smoke'
  | 'lowlevelhaze'
;

export type WeatherIconMap = {
  readonly [key in WeatherType]: string;
}