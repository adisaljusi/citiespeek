import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import React from 'react';
import { Entry } from '../models/model';
import { entriesStyles } from '../styles/styles';
import { Link } from 'react-router-dom';

interface Props {
  readonly entries: Entry[];
}

export const Entries: React.FC<Props> = ({ entries }) => {
  const c = entriesStyles();

  return (
    <div className={c.root}>
      <div className={c.container}>
        <h3>Entries</h3>
        {entries && (
          <List component="nav" aria-label="main mailbox folders">
            {entries.map((entry, id) => (
              <Link to={`/location/${entry.id}`} className={c.link}>
                <ListItem button key={id}>
                  <ListItemIcon>
                    <PinDropIcon />
                  </ListItemIcon>
                  <ListItemText primary={`${entry.latitude.toFixed(2)} ${entry.latitude.toFixed(2)}`} secondary={new Date(entry.dateTime).toDateString()} />
                </ListItem>
              </Link>
            ))}
          </List>
        )}
        {entries.length < 1 && (
          <h5 className={c.noEntriesSubtext}>No entries yet.</h5>
        )}
      </div>
    </div>
  )
}