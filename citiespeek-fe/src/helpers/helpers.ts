import Cloudy from '../img/weather-icons/cloudy-day.svg';
import MostlyCloudy from '../img/weather-icons/cloudy.svg';
import Day from '../img/weather-icons/day.svg';
import Fog from '../img/weather-icons/fog.svg';
import Haze from '../img/weather-icons/haze.svg';
import Sandstorm from '../img/weather-icons/sandstorm.svg';
import { WeatherIconMap } from '../models/model';

export const formatValue = (value: string): string => value.replaceAll(/[.,[]{}]/g, '');

// TODO: find icon for smoke
export const weatherIconMap: WeatherIconMap = {
  Clear: Day,
  Sunny: Day,
  Haze: Haze,
  Fog: Fog,
  Cloudy: Cloudy,
  Duststorm: Sandstorm,
  Sandstorm: Sandstorm,
  Overcast: MostlyCloudy,
  Smoke: Fog,
  MostlyCloudy: MostlyCloudy,
  DenseFog: Fog,
  HazySunshine: Haze,
  PassingClouds: Cloudy,
  MorningClouds: Cloudy,
  LightFog: Fog,
  LowLevelHaze: Haze,
  AMixtureofSunandClouds: Cloudy,
  MoreCloudsthanSun: MostlyCloudy,
  MostlyClear: Day,
  MoreSunthanClouds: Day,
  MostlySunny: Day,
  LowClouds: Cloudy,
  ScatteredClouds: MostlyCloudy,
  ClearingSkies: Day,
  IceFog: Fog,
  PartlyCloudy: Cloudy,
  AfternoonClouds: Cloudy,
  BrokenClouds: Cloudy,
  PartlySunny: Day,
  HighLevelClouds: MostlyCloudy,
  EarlyFogFollowedbySunny: Fog,
  BreaksofSunLater: Day,
  IncreasingCloudiness: MostlyCloudy,
  DecreasingCloudiness: Cloudy
};
