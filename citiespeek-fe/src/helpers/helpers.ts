import cloudy from '../img/weather-icons/cloudy-day.svg';
import mostlycloudy from '../img/weather-icons/cloudy.svg';
import day from '../img/weather-icons/day.svg';
import fog from '../img/weather-icons/fog.svg';
import haze from '../img/weather-icons/haze.svg';
import sandstorm from '../img/weather-icons/sandstorm.svg';
import { WeatherIconMap } from '../models/model';

export const formatValue = (value: string): string => value.replaceAll(/[.,[]{}]/g, '');

// TODO: find icon for smoke
// TODO: fix some indexes since their not corresponding to how the API should be used
export const weatherIconMap: WeatherIconMap = {
  clear: day,
  sunny: day,
  haze: haze,
  fog: fog,
  cloudy: cloudy,
  duststorm: sandstorm,
  sandstorm: sandstorm,
  overcast: mostlycloudy,
  smoke: fog,
  mostlycloudy: mostlycloudy,
  densefog: fog,
  hazysunshine: haze,
  passingclouds: cloudy,
  morningclouds: cloudy,
  lightfog: fog,
  lowlevelhaze: haze,
  amixtureofsunandclouds: cloudy,
  morecloudsthansun: mostlycloudy,
  mostlyclear: day,
  moresunthanclouds: day,
  mostlysunny: day,
  lowclouds: cloudy,
  scatteredclouds: mostlycloudy,
  clearingskies: day,
  icefog: fog,
  partlycloudy: cloudy,
  afternoonclouds: cloudy,
  brokenclouds: cloudy,
  partlysunny: day,
  highlevelclouds: mostlycloudy,
  earlyfogfollowedbysunny: fog,
  breaksofsunlater: day,
  increasingcloudiness: mostlycloudy,
  decreasingcloudiness: cloudy
};