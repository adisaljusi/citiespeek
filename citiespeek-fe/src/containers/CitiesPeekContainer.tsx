import {
  AppBar,
  createStyles,
  CssBaseline, makeStyles,
  Theme, Toolbar,
  Typography
} from '@material-ui/core';
import React from 'react';
import { LocationView } from '../components/LocationView';
import { Map } from '../components/Map';
import { SideDrawer } from '../components/SideDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      display: 'flex',
      marginTop: 64,
      height: 'calc(100% - 64px)'
    },
  }),
);

export const CitiesPeekContainer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6">
              CitiesPeek
            </Typography>
          </Toolbar>
        </AppBar>
        <SideDrawer />
        <div className={classes.content}>
          <LocationView />
          <Map />
        </div>
      </div>
    </>
  );
}