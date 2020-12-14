import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import React from 'react';

export const Entries = () => {
  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <PinDropIcon />
          </ListItemIcon>
          <ListItemText primary="Test" />
        </ListItem>
      </List>
    </div>
  )
}