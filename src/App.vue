<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <weather/>
    </div>
</template>

<script>
import Weather from '@/components/Weather/Weather.vue';

export default {
    name: 'app',
    data() {
        return {

        };
    },
    components: {
        Weather
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
