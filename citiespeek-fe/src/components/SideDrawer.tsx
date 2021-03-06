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
import { Link } from 'react-router-dom';
import { sideDrawerStyles } from '../styles/styles';

interface Props {
  readonly openSidebar: () => void,
  readonly handleEntries: () => void
}

export const SideDrawer: React.FC<Props> = ({ openSidebar, handleEntries }) => {
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
          <Link to="/location" className={c.link}>
            <ListItem button onClick={openSidebar}>
              <ListItemIcon><ExploreIcon /></ListItemIcon>
            </ListItem>
          </Link>
        </Tooltip>
        <Tooltip title="Saved Locations">
          <Link to="/entries" className={c.link}>
            <ListItem button onClick={handleEntries}>
              <ListItemIcon><ViewListIcon /></ListItemIcon>
            </ListItem>
          </Link>
        </Tooltip>
      </List>
      <Divider />
    </Drawer>
  );
}
