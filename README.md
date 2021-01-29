# simple-weather

## DONE
* Get data from [Open Weather Map](https://openweathermap.org) with a simple call
* Show data
* Add repository factory to manage different api calls
* Add data fallback in case of returned error by API
* Remove API logic from client
* Add data models for api calls
* Group FiveDays collection by date
* Add some layout
* Add current weather view with basic styles
* Add weather icons [Climacons](http://adamwhitcroft.com/climacons/)
* Update test location

## TO DO
* Remove moment.js in favour of plain JS
* Add typescript
* Test everything since now
  (√) Components
  ( ) Repositories
  ( ) Domain models
* Move sun vertically depending on time
* Add 5 days forecast to page
* Separate today & 5 days forecasts in different tabs
* Add location search with google places api
* Store data (store it in localstorage creating a timestamp to renew the info past 10 minutes).
* Deploy everything to netlify

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
