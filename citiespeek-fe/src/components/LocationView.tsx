import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '30%'
    },
    image: {
      objectFit: 'cover',
      height: '20%',
      width: '100%'
    }
  }),
);

export const LocationView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src="https://images.unsplash.com/photo-1517771355228-88102bee3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2567&q=80" />
      
    </div>
  )
};