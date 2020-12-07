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
import { formatValue } from '../helpers/helpers';
import { getWeatherObservation } from '../helpers/here.helpers';
import { searchImage } from '../helpers/unsplash.helper';
import { Image, Location } from '../models/model';
import { citiesPeekContainerStyles } from '../styles/styles';


export const CitiesPeekContainer = () => {
  const c = citiesPeekContainerStyles();
  const [image, setImage] = useState<Image | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const findLocation = async (lngLat: LngLat) => {
    setLoading(true);
    setSidebarIsOpen(true);
    const location = await getWeatherObservation(lngLat);
    const image = await searchImage(formatValue(`${location?.city} ${location?.state} ${location?.country}`));
    setImage(image);
    setLocation(location)
    setLoading(false);
  }

  const hideSidebar = () => setSidebarIsOpen(false);

  return (
    <>
      <div className={c.root}>
        <CssBaseline />
        <AppBar position="fixed" color="default" className={c.appBar}>
          <Toolbar>
            <Typography variant="h6">
              CitiesPeek
            </Typography>
          </Toolbar>
        </AppBar>
        <SideDrawer />
        <div className={c.content}>
          <LocationView
            image={image}
            open={sidebarIsOpen}
            location={location}
            hideSidebar={hideSidebar}
            loading={loading} />
          <Map findLocation={findLocation} />
        </div>
      </div>
    </>
  );
}