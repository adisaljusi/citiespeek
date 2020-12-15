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
    },
    link: {
      color: 'inherit'
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
      background: 'rgba(214, 214, 215, 0.5)',
      padding: '1em'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: '20%'
    },
    imageButton: {
      position: 'absolute',
      background: '#FFF'
    },
    locationText: {
      marginTop: 0,
      marginBottom: '0.5em'
    },
    locationSubtext: {
      marginTop: 0,
      marginBottom: '0.5em'
    },
    locationHeaderWrapper: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    loading: {
      height: '100%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center'
    },
    dismissButton: {
      marginRight: '0.75em'
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

export const weatherStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1em'
    },
    weather: {
      display: 'flex',
      justifyContent: 'center'
    },
    skyDescription: {
      marginTop: 0
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center'
    },
    image: {
      height: 65
    },
    dismissButton: {
      marginRight: '0.75em'
    }
  })
);


export const entriesStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '30%',
      zIndex: 121,
      boxShadow: '2px 2px 4px -1px rgba(0,0,0,0.2), 4px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      transition: 'width 0.5s ease-in-out'
    },
    container: {
      padding: 10
    },
    noEntriesSubtext: {
      textAlign: 'center'
    },
    link: {
      color: 'inherit',
      textDecoration: 'none'
    }
  })
);