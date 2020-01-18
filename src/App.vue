<template>
    <div id="app">
        <current-weather/>
        <five-days-weather :weather-data="fiveDays"/>
    </div>
</template>

<script>
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather';
import FiveDaysWeather from '@/components/FiveDaysWeather/FiveDaysWeather';
import Repository from '@/repositories/RepositoryFactory';
const FiveDaysRepository = Repository.get('fiveDays');

export default {
    name: 'app',
    data() {
        return {
            fiveDays: {},
            cityID: '2509954',
            daysCount: 40
        };
    },
    components: {
        CurrentWeather,
        FiveDaysWeather
    },
    methods: {
        async loadData() {
            this.fiveDays = await FiveDaysRepository.get(this.cityID, this.daysCount);
        }
    },
    created() {
        this.loadData();
    }
};
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,400i,600,800&display=swap');
    @import './assets/styles/styles.css';
</style>
