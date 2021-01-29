<template>
  <div id="app">
    <current :weather-data="current" />
  </div>
</template>

<script>
import Current from '@/components/Current/Current';
import Repository from '@/repositories/RepositoryFactory';
const FiveDaysRepository = Repository.get('fiveDays');
const CurrentWeatherRepository = Repository.get('currentWeather');

export default {
    name: 'App',
    components: {
        Current,
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
