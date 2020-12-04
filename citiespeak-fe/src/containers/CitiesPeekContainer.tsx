import {
  AppBar,
  createStyles,
  CssBaseline, makeStyles,
  Theme, Toolbar,
  Typography
} from '@material-ui/core';
import React from 'react';
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
      flexGrow: 1
    }
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
          <Toolbar />
          <div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto repudiandae vel non rerum accusamus sit autem, doloremque voluptas tempore corporis mollitia maxime nihil dignissimos deleniti explicabo consectetur aspernatur hic!</p>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}