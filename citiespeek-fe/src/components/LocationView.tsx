import { IconButton, Paper, Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import { Image, Location } from '../models/model';
import { locationViewStyles } from '../styles/styles';
interface Props {
  readonly image: Image | null;
  readonly open: boolean;
  readonly location: Location;
}

export const LocationView: React.FC<Props> = ({ image, open, location }) => {
  const c = locationViewStyles();

  return (
    <div className={!open ? c.closed : c.root}>
      <div className={c.imageContainer}>
        <IconButton className={c.imageButton}>
          <CloseIcon />
        </IconButton>
        {
          image != null
            ? <img className={c.image} src={image.src} alt={image.alt} />
            : <div className={c.noImage}><span className={c.noImageText}>No image found</span></div>
        }
      </div>
      <Paper elevation={7} className={c.location}>
        <div>
          <h3>{location.city} </h3>
          <Tooltip title="Location may be wrong">
            <InfoIcon />
          </Tooltip>
        </div>
        <h3>{location.country}</h3>
        <span>{location.lngLat.latitude}, {location.lngLat.longitude}</span>
      </Paper>
    </div>
  )
};