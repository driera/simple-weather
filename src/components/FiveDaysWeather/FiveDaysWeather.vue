<template>
    <section>
        <div>WEATHER With API Call to Open Weather Map</div>
        <div class="weather-container">
            <div class="weather-date" v-for="(date, key) in weatherData" :key="key">
                <h1>{{ key}}</h1>
                <div class="weather-item" v-for="item in date" :key="item.id">
                    <span>{{ item.time }}</span>
                    :
                    <span>{{item.state}}</span>
                    :
                    <span>{{item.temperature}}ºC</span>
                    :
                    <span>{{item.windSpeed}}<sup>km/h</sup></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FiveDaysWeather',
    props: {
        weatherData: {
            type: Object
        }
    }
};
</script>

<style scoped>
    @import 'FiveDaysWeather';
</style>
