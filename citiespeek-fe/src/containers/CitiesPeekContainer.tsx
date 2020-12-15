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
import { getEntryById, getEntries, insertEntry, updateEntry } from '../helpers/cp.fetch';
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
  const [transmittedLocation, setTransmittedLocation] = useState<{ longitude: number, latitude: number } | null>(null);

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
      const { longitude, latitude } = entry;
      await findLocation(new LngLat(longitude, latitude));
      setTransmittedLocation({ longitude, latitude });
    }
  }

  const hideSidebar = () => setSidebarIsOpen(false);
  const openSidebar = () => setSidebarIsOpen(true);

  const handleEntries = async () => {
    setSidebarIsOpen(true);
    const entries = await getEntries();
    setEntries(entries);
  }

  const saveLocation = async () => {
    if (location) {
      await insertEntry(location)
    }
  };

  const updateLocation = async (id: string) => {
    if (location && id) {

      const entry: Entry = {
        id,
        dateTime: new Date().toISOString(),
        latitude: location.lngLat.lat,
        longitude: location.lngLat.lng,
      };
      await updateEntry(entry);
    }
  }

  const dismissLocation = () => {
    setSidebarIsOpen(false);
    setLocation(null);
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
        <SideDrawer openSidebar={openSidebar} handleEntries={handleEntries} />
        <div className={c.content}>
          <Switch>
            <Route exact path="/location">
              <LocationView
                image={image}
                open={sidebarIsOpen}
                location={location}
                hideSidebar={hideSidebar}
                loading={loading}
                handleLocationById={handleLocationById}
                saveLocation={saveLocation}
                updateLocation={updateLocation}
                dismissLocation={dismissLocation}/>
            </Route>
            <Route exact path="/location/:id">
              <LocationView
                image={image}
                open={sidebarIsOpen}
                location={location}
                hideSidebar={hideSidebar}
                loading={loading}
                handleLocationById={handleLocationById}
                saveLocation={saveLocation}
                updateLocation={updateLocation}
                dismissLocation={dismissLocation} />
            </Route>
            <Route exact path="/entries">
              <Entries entries={entries} />
            </Route>
            <Route exact path="/">
              <Redirect to="/location" />
            </Route>
          </Switch>
          <Map findLocation={findLocation} transmittedLocation={transmittedLocation} />
        </div>
      </div>
    </>
  );
}