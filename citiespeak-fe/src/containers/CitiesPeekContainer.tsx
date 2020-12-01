import React from 'react';
import { Map } from '../components/Map';
import { AppBar, Toolbar, IconButton, Typography, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const CitiesPeekContainer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              CitiesPeek
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Map />
    </>
  );
}