import React from 'react';
import {
  Toolbar,
  createStyles,
  makeStyles,
  Theme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  CssBaseline
} from '@material-ui/core';

import ExploreIcon from '@material-ui/icons/Explore';
import ViewListIcon from '@material-ui/icons/ViewList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: 60,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 60,
    }
  }),
);

export const SideDrawer = () => {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}>
      <Toolbar />
      <List>
        <ListItem button>
          <ListItemIcon><ExploreIcon /></ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon><ViewListIcon /></ListItemIcon>
        </ListItem>
      </List>
      <Divider />
    </Drawer>);
}

