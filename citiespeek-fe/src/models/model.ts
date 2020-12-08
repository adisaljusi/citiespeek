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
  | 'MostlySunny'
  | 'MostlyClear'
  | 'HazySunshine'
  | 'Haze'
  | 'PassingClouds'
  | 'MoreSunthanClouds'
  | 'ScatteredClouds'
  | 'PartlyCloudy'
  | 'AMixtureofSunandClouds'
  | 'HighLevelClouds'
  | 'MoreCloudsthanSun'
  | 'PartlySunny'
  | 'BrokenClouds'
  | 'MostlyCloudy'
  | 'Cloudy'
  | 'Overcast'
  | 'LowClouds'
  | 'LightFog'
  | 'Fog'
  | 'DenseFog'
  | 'IceFog'
  | 'Sandstorm'
  | 'Duststorm'
  | 'IncreasingCloudiness'
  | 'DecreasingCloudiness'
  | 'ClearingSkies'
  | 'BreaksofSunLater'
  | 'EarlyFogFollowedbySunny'
  | 'AfternoonClouds'
  | 'MorningClouds'
  | 'Smoke'
  | 'LowLevelHaze'
;

export type WeatherIconMap = {
  readonly [key in WeatherType]: string;
}