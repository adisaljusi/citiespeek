import React, { useEffect } from 'react';
import { Observation, WeatherIconMap, WeatherType } from '../models/model';
import { weatherStyles } from '../styles/styles';
import Cloudy from '../img/weather-icons/cloudy-day.svg';
import MostlyCloudy from '../img/weather-icons/cloudy.svg';
import Day from '../img/weather-icons/day.svg';
import Fog from '../img/weather-icons/fog.svg';
import Haze from '../img/weather-icons/haze.svg';
import Sandstorm from '../img/weather-icons/sandstorm.svg';

const weatherIconMap: WeatherIconMap = {
  Clear: Day,
  Sunny: Day,
  Haze: Haze,
  Fog: Fog,
  Cloudy: Cloudy,
  Duststorm: Sandstorm,
  Sandstorm: Sandstorm,
  Overcast: MostlyCloudy,
  Smoke: Fog,
  "Mostly Cloudy": MostlyCloudy,
  "Dense Fog": Fog,
  "Hazy Sunshine": Haze,
  "Passing Clouds": Cloudy,
  "Morning Clouds": Cloudy,
  "Light Fog": Fog,
  "Low Level Haze": Haze,
  "A Mixture of Sun and Clouds": Cloudy,
  "More Clouds than Sun": MostlyCloudy,
  "Mostly Clear": Day,
  "More Sun than Clouds": Day,
  "Mostly Sunny": Day,
  "Low Clouds": Cloudy,
  "Scattered Clouds": MostlyCloudy,
  "Clearing Skies": Day,
  "Ice Fog": Fog,
  "Partly Cloudy": Cloudy,
  "Afternoon Clouds": Cloudy,
  "Broken Clouds": Cloudy,
  "Partly Sunny": Day,
  "High Level Clouds": MostlyCloudy,
  "Early Fog Followed by Sunny": Fog,
  "Breaks of Sun Later": Day,
  "Increasing Cloudiness": MostlyCloudy,
  "Decreasing Cloudiness": Cloudy
}


interface Props {
  readonly observation: Observation;
}

export const Weather: React.FC<Props> = ({ observation }) => {
  const c = weatherStyles();
  let imageSrc = weatherIconMap[observation.skyDescription];

  return (
    <div className={c.container}>
      <h2>{observation.temperature}°</h2>
      {
        imageSrc !== '' && (
          <img src={imageSrc} alt={observation.skyDescription} />
        )
      }
      <h5>{observation.skyDescription}</h5>
    </div>
  )
}