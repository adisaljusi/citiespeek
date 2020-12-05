import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Image } from '../models/model';

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
    closed: {
      width: 0
    }
  }),
);
interface Props {
  readonly image: Image | null;
  readonly open: boolean;
}

export const LocationView: React.FC<Props> = ({ image, open }) => {
  const classes = useStyles();

  return (
    <div className={!open ? classes.closed : classes.root}>
      {
        image != null
          ? <img className={classes.image} src={image.src} alt={image.alt} />
          : <div className={classes.image}>No image found</div>
      }
    </div>
  )
};