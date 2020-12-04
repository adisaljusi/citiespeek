interface Environment {
  readonly mapboxConfig: {
    readonly API_KEY: string;
    readonly defaultLatitude: number;
    readonly defaultLongitude: number;
  };
  readonly hereDestinationWeatherConfig: {
    readonly URI: string;
    readonly API_KEY: string;
  };
}

export const environment: Environment = {
  mapboxConfig: {
    API_KEY: process.env.REACT_APP_MAPBOX_API_KEY as string,
    defaultLatitude: 0.0,
    defaultLongitude: 0.0
  },
  hereDestinationWeatherConfig: {
    URI: 'https://weather.ls.hereapi.com/weather/1.0/report.json?',
    API_KEY: process.env.REACT_APP_HERE_API_KEY as string
  }
};
