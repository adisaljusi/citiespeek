import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { LocationView } from '../components/LocationView';
import { Map } from '../components/Map';
import { SideDrawer } from '../components/SideDrawer';
import { searchImage } from '../helpers/unsplash.helper';
import { Image, Location } from '../models/model';
import { citiesPeekContainerStyles } from '../styles/styles';


export const CitiesPeekContainer = () => {
  const classes = citiesPeekContainerStyles();
  const [image, setImage] = useState<Image | null>(null);
  const location: Location = {
    city: 'San Francisco',
    country: 'United States of America',
    lngLat: {
      longitude: 0.00,
      latitude: 0.00
    }
  };

  useEffect(() => {
    // const searchImageAsync = async () => {
    //   const imageSrc = await searchImage('san francisco');
    //   setImage(imageSrc);
    // }
    // searchImageAsync();
  });

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6">
              CitiesPeek
            </Typography>
          </Toolbar>
        </AppBar>
        <SideDrawer />
        <div className={classes.content}>
          <LocationView image={image} open={true} location={location} />
          <Map />
        </div>
      </div>
    </>
  );
}