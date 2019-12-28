<template>
    <section>
        <div>WEATHER With API Call to Open Weather Map</div>
        <div class="weather-container">
            <div class="weather-item" v-for="item in info.list" :key="item.dt">
                <span>{{ item.dt_txt }}</span>
                :
                <span>{{item.weather[0].main}}</span>
                :
                <span>{{item.main.temp}}ºC</span>
            </div>
        </div>
    </section>
</template>

<script>
import Repository from '@/repositories/RepositoryFactory';
const FiveDaysRepository = Repository.get('fiveDays');
const CurrentWeatherRepository = Repository.get('currentWeather');

export default {
    name: 'WeatherWithApi',
    data() {
        return {
            info: {},
            cityID: '2509954',
            daysCount: 40
        };
    },
    methods: {
        async getFiveDays() {
            this.info = await FiveDaysRepository.get(this.cityID, this.daysCount);
        },
        async getCurrentWeather() {
            const data = await CurrentWeatherRepository.get(this.cityID);
            console.log(data);
        }
    },
    mounted() {
        this.getFiveDays();
        this.getCurrentWeather();
    }
};
</script>

<style scoped>
    @import 'Weather.css';
</style>
