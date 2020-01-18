<template>
    <div id="app">
        <current-weather/>
        <five-days-weather/>
    </div>
</template>

<script>
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather';
import FiveDaysWeather from '@/components/FiveDaysWeather/FiveDaysWeather';

export default {
    name: 'app',
    data() {
        return {

        };
    },
    components: {
        CurrentWeather,
        FiveDaysWeather
    }
};
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,400i,600,800&display=swap');
    @import './assets/styles/styles.css';
</style>
