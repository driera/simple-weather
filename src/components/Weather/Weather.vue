<template>
    <section>
        <div>WEATHER</div>
        <div v-for="item in weatherData.list" :key="item.dt">
            <span>{{ item.dt_txt }}</span>
            :
            <span>{{item.weather[0].main}}</span>
            :
            <span>{{item.main.temp}}ºC</span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Weather',
    props: {
        weatherData: Object
    }
};
</script>

<style>
    @import 'Weather.css';
</style>
