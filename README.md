Simple weather app
---
Welcome! This is a weather app made using React, Typescript and CSS Modules. With this I tried to practice a bit of software design, API calls and TDD.

The app does take into account your browser's location to get weather data from [Open Weather Map API](https://openweathermap.org).

It uses [React router](https://reactrouter.com) to navigate between different views, and [Highcharts](https://www.highcharts.com) to represent the weather evolution within the next 5 days.

The app has its own github workflow and get published on each deploy in [driera.github.io/simple-weather-react/](https://driera.github.io/simple-weather-react/)


TO DO
---
* Give a try to [VisualCrossing Weather API](https://www.visualcrossing.com/weather-query-builder/)
* Add data fallback in case of returned error by API
* Group FiveDays collection by date
* Update test location
* UI Animation Move sun vertically depending on time
* Add location search with google places api + [OpenWeather geocoding API](https://openweathermap.org/api/geocoding-api)
* Store data (store it in localstorage creating a timestamp to renew the info past 10 minutes).

DONE
---
* Add typescript
* Get data from [Open Weather Map](https://openweathermap.org) with a simple call
* Show data
* Add repository factory to manage different api calls
* Remove API logic from client
* Add entity models for api calls
* Add some layout
* Add current weather view with basic styles
* Add weather icons [Climacons](http://adamwhitcroft.com/climacons/)
* Initial testing:
  (√) Components
  (√) Repositories
  (√) Domain models
* Error boundary
* Call weather API depending on location coordinates, instead of city Id
* Get user coordinates using navigator geolocation API
* Add FiveDays prediction
* Separate today & 5 days forecasts in different tabs
* Deploy everything to Github Pages 


Available Scripts
---
- `npm run start`: Runs the app in the development mode.\
- `npm test` or `npm run test:watch`: Launches the test runner using jest and testing library
- `npm lint` or `npm lint:fix`: Lints the code using eslint
- `npm check-types` or `npm check-types:watch`: Checks for Typescript type errors
- `npm build`: Builds the app for production to the `build` folder.

Attributions
---
Thanks Adam Whitcroft for the great icon collection [Climacons](http://adamwhitcroft.com/climacons/).
