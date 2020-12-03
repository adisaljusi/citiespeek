import React from 'react';
import { Map } from '../components/Map';
import {
  AppBar,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider
} from '@material-ui/core';

import ExploreIcon from '@material-ui/icons/Explore';
import ViewListIcon from '@material-ui/icons/ViewList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    main: {
      display: 'flex',
    },
    drawer: {
      marginTop: '64px'
    }
  })
);

export const CitiesPeekContainer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.appBar}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              CitiesPeek
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        variant="permanent"
        className={classes.drawer}>
        <List>
          <ListItem button>
            <ListItemIcon><ExploreIcon /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><ViewListIcon /></ListItemIcon>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <div className={classes.main}>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto repudiandae vel non rerum accusamus sit autem, doloremque voluptas tempore corporis mollitia maxime nihil dignissimos deleniti explicabo consectetur aspernatur hic!</p>
        </div>
        <Map />
      </div>

    </>
  );
}