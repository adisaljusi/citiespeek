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
} from '@material-ui/core';

import ExploreIcon from '@material-ui/icons/Explore';
import ViewListIcon from '@material-ui/icons/ViewList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 60,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 60,
      overflow: 'hidden'
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

