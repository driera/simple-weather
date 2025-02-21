# Simple weather app
Weather app using React + Typescript + CSS Modules + Vite 

## DONE
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

## TO DO
* Give a try to [VisualCrossing Weather API](https://www.visualcrossing.com/weather-query-builder/)
* Add data fallback in case of returned error by API
* Group FiveDays collection by date
* Update test location
* UI Animation Move sun vertically depending on time
* Add location search with google places api + [OpenWeather geocoding API](https://openweathermap.org/api/geocoding-api)
* Store data (store it in localstorage creating a timestamp to renew the info past 10 minutes).

## Available Scripts

In the project directory, you can run:

#### `npm run start`
Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

#### `npm test` or `npm run test:watch`
Launches the test runner using jest and testing library

#### `npm lint` or `npm lint:fix`
Lints the code using eslint

#### `npm check-types` or `npm check-types:watch`
Checks for Typescript type errors

#### `npm build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
