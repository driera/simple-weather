<template>
    <section>
        <div>WEATHER With API Call to Open Weather Map</div>
        <div v-for="item in info.list" :key="item.dt">
            <div>{{ item.dt_txt }}: {{item.weather[0].main}}: {{item.main.temp}}ºC</div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'WeatherWithApi',
    data() {
        return {
            info: null,
            API: process.env.VUE_APP_WEATHER_API,
            cityID: '2509954',
            daysCount: 40
        };
    },
    methods: {
        callApi() {
            axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${this.cityID}&cnt=${this.daysCount}&units=metric&APPID=${this.API}`)
                .then(response => {
                    this.info = response.data;
                });
        }
    },
    mounted() {
        this.callApi();
    }
};
</script>

<style>

</style>
