import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography
} from '@material-ui/core';
import { LngLat } from 'mapbox-gl';
import React, { useState } from 'react';
import { LocationView } from '../components/LocationView';
import { Map } from '../components/Map';
import { SideDrawer } from '../components/SideDrawer';
import { formatValue } from '../helpers/helpers';
import { getWeatherObservation } from '../helpers/here.helpers';
import { searchImage } from '../helpers/unsplash.helper';
import { Image, Location } from '../models/model';
import { citiesPeekContainerStyles } from '../styles/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


export const CitiesPeekContainer = () => {
  const c = citiesPeekContainerStyles();
  const [image, setImage] = useState<Image | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
  const openSidebar = () => setSidebarIsOpen(true);

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
        <SideDrawer openSidebar={openSidebar} />
        <div className={c.content}>
          <Router>
            <Switch>
              <Route path="/location/:id?">
                <LocationView
                  image={image}
                  open={sidebarIsOpen}
                  location={location}
                  hideSidebar={hideSidebar}
                  loading={loading} />
              </Route>
              <Route exact path="/entries">
                <div></div>
              </Route>
              <Route exact path="/">
                <Redirect to="/location"/>
              </Route>
            </Switch>
          </Router>

          <Map findLocation={findLocation} />
        </div>
      </div>
    </>
  );
}