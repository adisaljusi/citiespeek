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
  Tooltip,
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
        <Tooltip title="Map">
          <ListItem button>
            <ListItemIcon><ExploreIcon /></ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip title="Saved Locations">
          <ListItem button>
            <ListItemIcon><ViewListIcon /></ListItemIcon>
          </ListItem>
        </Tooltip>
      </List>
      <Divider />
    </Drawer>);
}

