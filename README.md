# Cities Peek
Cities Peek is a application that lets you view the temperature of location with latitude and longitude

## Info
As a school project I had to combine multiple APIs into one application. The idea is to select a location on a map and then display information about the weather and the location. It uses:
- **Frontend:** React + Typescript with MaterialUI
- **Backend:** Java Spring Boot REST

## Stack
- React
- TypeScript
- Java SpringBoot
- Postgres
- Docker

## APIs
- Unsplash
- MapBox 
- here Destination Weather API
- Selfmade API to store certain values in a database

## Start the application
### Database

Easiest way to get an database is to use a docker container for it.

Run this command:

```docker run --rm -it --name postgres -e POSTGRES_PASSWORD=1234 -p 5432:5432 postgres:13-alpine```

Note that you'd have to change the password if you like to run it for production.

### Frontend

#### Prerequisites 
- NPM
- yarn

##### Install packages
yarn install in the **citiespeek-fe** folder

##### Run the application

You need three environment variables to be able to start the application.
- REACT_APP_MAPBOX_KEY
- REACT_APP_UNSPLASH_ACCESS_KEY
- REACT_APP_HERE_APY_KEY

Export environment variables. (Just Google this. I ain't gonna put links for something as easy as this. There's also a full Microsoft documentation for that on Powershell if you don't use bash)

If everything is fine, just run `yarn run start` 🚀 (without the rocket)


