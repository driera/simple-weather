<template>
    <div id="app">
        <current-weather/>
    </div>
</template>

<script>
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather';

export default {
    name: 'app',
    data() {
        return {

        };
    },
    components: {
        CurrentWeather
    }
};
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,400i,600,800&display=swap');
    @import './assets/styles/styles.css';
</style>
