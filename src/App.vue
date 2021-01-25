<template>
  <div id="app">
    <current-weather :weather-data="current" />
    <five-days-weather :weather-data="fiveDays" />
  </div>
</template>

<script>
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather';
import FiveDaysWeather from '@/components/FiveDaysWeather/FiveDaysWeather';
import Repository from '@/repositories/RepositoryFactory';
const FiveDaysRepository = Repository.get('fiveDays');
const CurrentWeatherRepository = Repository.get('currentWeather');

export default {
    name: 'App',
    components: {
        CurrentWeather,
        FiveDaysWeather
    },
    data() {
        return {
            fiveDays: null,
            current: null,
            cityID: '2509954',
            daysCount: 40
        };
    },
    created() {
        this.loadData();
    },
    methods: {
        async loadData() {
            this.fiveDays = await FiveDaysRepository.get(this.cityID, this.daysCount);
            this.current = await CurrentWeatherRepository.get(this.cityID);
        }
    }
};
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,400i,600,800&display=swap');
    @import './assets/styles/styles.css';
</style>
