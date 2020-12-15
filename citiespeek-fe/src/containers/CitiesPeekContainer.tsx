import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography
} from '@material-ui/core';
import { LngLat } from 'mapbox-gl';
import React, { useState } from 'react';
import {
  Redirect, Route, Switch
} from "react-router-dom";
import { Entries } from '../components/Entries';
import { LocationView } from '../components/LocationView';
import { Map } from '../components/Map';
import { SideDrawer } from '../components/SideDrawer';
import { getEntryById, getEntries } from '../helpers/cp.fetch';
import { formatValue } from '../helpers/helpers';
import { getWeatherObservation } from '../helpers/here.fetch';
import { searchImage } from '../helpers/unsplash.fetch';
import { Entry, Image, Location } from '../models/model';
import { citiesPeekContainerStyles } from '../styles/styles';

export const CitiesPeekContainer = () => {
  const c = citiesPeekContainerStyles();
  const [image, setImage] = useState<Image | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]);

  const findLocation = async (lngLat: LngLat) => {
    setLoading(true);
    setSidebarIsOpen(true);
    const location = await getWeatherObservation(lngLat);
    const image = await searchImage(formatValue(`${location?.city} ${location?.state} ${location?.country}`));
    setImage(image);
    setLocation(location)
    setLoading(false);
  }

  const handleLocationById = async (id: string) => {
    setLoading(true);
    setSidebarIsOpen(true);
    const entry = await getEntryById(id);

    if (entry) {
      await findLocation(new LngLat(entry.longitude, entry.latitude));
    }
  }

  const hideSidebar = () => setSidebarIsOpen(false);
  const openSidebar = () => setSidebarIsOpen(true);

  const handleEntries = async () => {
    setSidebarIsOpen(true);
    const entries = await getEntries();
    setEntries(entries);
  }

  return (
    <>
      <CssBaseline />
      <div className={c.root}>
        <AppBar position="fixed" color="default" className={c.appBar}>
          <Toolbar>
            <Typography variant="h6">
              CitiesPeek
            </Typography>
          </Toolbar>
        </AppBar>
        <SideDrawer openSidebar={openSidebar} handleEntries={handleEntries}/>
        <div className={c.content}>
          <Switch>
            <Route exact path="/location">
              <LocationView
                image={image}
                open={sidebarIsOpen}
                location={location}
                hideSidebar={hideSidebar}
                loading={loading}
                handleLocationById={handleLocationById}/>
            </Route>
            <Route exact path="/location/:id">
              <LocationView
                image={image}
                open={sidebarIsOpen}
                location={location}
                hideSidebar={hideSidebar}
                loading={loading} 
                handleLocationById={handleLocationById}/>
            </Route>
            <Route exact path="/entries">
              <Entries entries={entries}/>
            </Route>
            <Route exact path="/">
              <Redirect to="/location" />
            </Route>
          </Switch>
          <Map findLocation={findLocation} />
        </div>
      </div>
    </>
  );
}