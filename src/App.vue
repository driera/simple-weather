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
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    @import './assets/styles/styles.css';
</style>
