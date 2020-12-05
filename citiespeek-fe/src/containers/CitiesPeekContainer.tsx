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
  const imageSrc = 'https://images.unsplash.com/photo-1517771355228-88102bee3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2567&q=80';

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
          <LocationView imageSrc={imageSrc} open={true}/>
          <Map />
        </div>
      </div>
    </>
  );
}