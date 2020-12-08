import {
  Divider, Drawer,
  List,
  ListItem,
  ListItemIcon, Toolbar,
  Tooltip
} from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import ViewListIcon from '@material-ui/icons/ViewList';
import React from 'react';
import { sideDrawerStyles } from '../styles/styles';

interface Props {
  readonly openSidebar: () => void
}

export const SideDrawer: React.FC<Props> = ({ openSidebar }) => {
  const c = sideDrawerStyles();
  return (
    <Drawer
      variant="permanent"
      className={c.drawer}
      classes={{
        paper: c.drawerPaper
      }}>
      <Toolbar />
      <List>
        <Tooltip title="Location">
          <ListItem button onClick={openSidebar}>
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
