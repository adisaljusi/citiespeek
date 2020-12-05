import React from 'react';
import { createStyles, IconButton, makeStyles, Paper, Theme, Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Image, Location } from '../models/model';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '30%',
      zIndex: 121,
      boxShadow: '2px 2px 4px -1px rgba(0,0,0,0.2), 4px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      transition: 'width 0.5s ease-in-out'
    },
    image: {
      objectFit: 'cover',
      height: '20%',
      width: '100%'
    },
    noImage: {
      height: '20%',
      width: '100%',
      display: 'table',
      background: 'rgba(0, 0, 0, 0.05)'
    },
    noImageText: {
      display: 'table-cell',
      verticalAlign: 'middle',
      textAlign: 'center',
      fontSize: '1.5em'
    },
    closed: {
      width: 0
    },
    location: {
      marginTop: -5,
      background: 'rgba(0, 0, 0, 0.01)'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    imageButton: {
      position: 'absolute',
      background: '#FFF'
    }
  }),
);
interface Props {
  readonly image: Image | null;
  readonly open: boolean;
  readonly location: Location;
}

export const LocationView: React.FC<Props> = ({ image, open, location }) => {
  const classes = useStyles();

  return (
    <div className={!open ? classes.closed : classes.root}>
      <div className={classes.imageContainer}>
        <IconButton className={classes.imageButton}>
          <CloseIcon />
        </IconButton>
        {
          image != null
            ? <img className={classes.image} src={image.src} alt={image.alt} />
            : <div className={classes.noImage}><span className={classes.noImageText}>No image found</span></div>
        }
      </div>
      <Paper elevation={7} className={classes.location}>
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