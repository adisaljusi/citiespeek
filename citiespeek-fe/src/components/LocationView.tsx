import { CircularProgress, Paper, Tooltip } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import { Image, Location } from '../models/model';
import { locationStyles } from '../styles/styles';
import { LocationImage } from './LocationImage';
interface Props {
  readonly image: Image | null;
  readonly open: boolean;
  readonly location: Location | null;
  readonly loading: boolean;
  readonly hideSidebar: () => void;
}

export const LocationView: React.FC<Props> = ({ image, open, location, hideSidebar, loading }) => {
  const c = locationStyles();

  return (
    <div className={!open ? c.closed : c.root}>
      {loading && (
        <CircularProgress />
      )}
      {!loading && (
        <>
          <LocationImage image={image} hideSidebar={hideSidebar} />
          {location && (
            <Paper elevation={7} className={c.location}>
              <div>
                <h3>{location.city} </h3>
                <Tooltip title="Location and weather information might differ">
                  <InfoIcon />
                </Tooltip>
              </div>
              <h3>{location.country}</h3>
              <span>Lat: {location.lngLat.lat.toFixed(4)}, Long: {location.lngLat.lng.toFixed(4)}</span>
            </Paper>
          )}
        </>
      )}
    </div>
  );
}