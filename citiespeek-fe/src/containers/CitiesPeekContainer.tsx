import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography
} from '@material-ui/core';
import { LngLat } from 'mapbox-gl';
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
  const [location, setLocation] = useState<Location | null>(null);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  // useEffect(() => {
  //   // const searchImageAsync = async () => {
  //   //   const imageSrc = await searchImage('san francisco');
  //   //   setImage(imageSrc);
  //   // }
  //   // searchImageAsync();
  // });

  const findLocation = (lngLat: LngLat) => {
    setSidebarIsOpen(true);
    setLocation({
      city: 'San Francisco',
      country: 'United States of America',
      lngLat
    });
  }

  const hideSidebar = () => setSidebarIsOpen(false);

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
          <LocationView
            image={image}
            open={sidebarIsOpen}
            location={location}
            hideSidebar={hideSidebar}/>
          <Map findLocation={findLocation} />
        </div>
      </div>
    </>
  );
}