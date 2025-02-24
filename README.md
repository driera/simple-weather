# Simple Weather App
## Overview
A dynamic weather application built with React, TypeScript, and CSS Modules that provides current weather conditions and forecasts.

## 🎯 Key Features
- **Automatic Geolocation**: Detects user's location through browser's geolocation API
- **Current Weather**: Displays real-time weather conditions for the user's location
- **5-Day Forecast**: Visualizes detailed weather predictions for the upcoming days  using Highcharts
- **Multi-view Navigation**: Seamless transitions between different app sections using React Router
- **Responsive Design**: Optimized for all device sizes

## 🛠️ Technologies
- **Frontend Framework**: React with TypeScript
- **Styling**: CSS Modules
- **Weather Data**: Open Weather Map API
Charting**: Highcharts
- **Routing**: React Router
- **Testing**: Jest and React Testing Library
- **Development Approach**: Test-Driven Development (TDD)

## 🏗️ Architecture
The application follows a component-based architecture emphasizing:
- Modular and reusable components
- Clean separation of concerns
- Comprehensive test coverage
- Responsive design principles

## 🚦 Getting Started
### Prerequisites
- Node.js
- npm
- Open Weather Map API key

## Installation
```bash
  # Clone the repository
  git clone https://github.com/driera/simple-weather.git

  # Install dependencies
  npm install

  # Set up environment variables (create a .env file with your API key)
  REACT_APP_OPENWEATHER_API_KEY=your_api_key_here

  # Start the development server
  npm start
```

## 🧪 Available Scripts
- **npm run start**: Runs the app in development mode
- **npm test or npm run test**:watch: Launches the test runner using Jest and Testing Library
- **npm lint** or **npm lint:fix**: Lints the code using ESLint
- **npm check-types** or **npm check-types:watch**: Checks for TypeScript type errors
- **npm build**: Builds the app for production to the build folder

## 📱 Usage
Visit the live demo at [driera.github.io/simple-weather/](https://driera.github.io/simple-weather/)

## 📝 License
This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author
- GitHub: [driera](https://github.com/driera)
- LinkedIn: [daniriera](https://www.linkedin.com/in/daniriera/)

## 🙏 Acknowledgments
[Open Weather Map](https://openweathermap.org/) for providing the weather data API
[Highcharts](https://www.highcharts.com/) for the charting library
[React Router](https://reactrouter.com/) for navigation functionality
[Adam Whitcroft](http://adamwhitcroft.com/) for the [Climacons](http://adamwhitcroft.com/climacons/) icon collection

--- 

### TO DO
* Give a try to [VisualCrossing Weather API](https://www.visualcrossing.com/weather-query-builder/)
* Add data fallback in case of returned error by API
* Group FiveDays collection by date
* Update test location
* UI Animation Move sun vertically depending on time
* Add location search with google places api + [OpenWeather geocoding API](https://openweathermap.org/api/geocoding-api)
* Store data (store it in localstorage creating a timestamp to renew the info past 10 minutes).

### DONE
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
