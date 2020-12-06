import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const sideDrawerStyles = makeStyles((theme: Theme) =>
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

export const locationStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '30%',
      zIndex: 121,
      boxShadow: '2px 2px 4px -1px rgba(0,0,0,0.2), 4px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      transition: 'width 0.5s ease-in-out'
    },
    image: {
      objectFit: 'cover',
      width: '100%'
    },
    noImage: {
      width: '100%',
      display: 'table',
      background: 'rgba(0, 0, 0, 0.05)'
    },
    noImageText: {
      display: 'table-cell',
      verticalAlign: 'middle',
      textAlign: 'center',
      fontSize: '1.5em'
    },
    closed: {
      width: 0
    },
    location: {
      marginTop: -5,
      background: 'rgba(0, 0, 0, 0.01)'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: '20%'
    },
    imageButton: {
      position: 'absolute',
      background: '#FFF'
    }
  }),
);

export const citiesPeekContainerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      display: 'flex',
      marginTop: 64,
      height: 'calc(100% - 64px)'
    },
  }),
);
