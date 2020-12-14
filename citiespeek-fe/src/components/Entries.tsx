import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import React from 'react';
import { Entry } from '../models/model';
import { entriesStyles } from '../styles/styles';

interface Props {
  readonly entries: Entry[];
}

export const Entries: React.FC<Props> = ({ entries }) => {
  const c = entriesStyles();

  return (
    <div className={c.root}>
      <div className={c.container}>
        <h3>Entries</h3>
        {entries && entries.map(entry => (
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <PinDropIcon />
              </ListItemIcon>
              <ListItemText primary="Test" secondary="20-10-2020" />
            </ListItem>
          </List>
        ))}
        {entries.length < 1 && (
          <h5 className={c.noEntriesSubtext}>No entries yet.</h5>
        )}
      </div>
    </div>
  )
}