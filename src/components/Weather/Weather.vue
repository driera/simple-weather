<template>
    <section>
        <div>WEATHER With API Call to Open Weather Map</div>
        <div class="weather-container">
            <div class="weather-item" v-for="item in info" :key="item.id">
                <span>{{ item.time }}</span>
                :
                <span>{{item.state}}</span>
                :
                <span>{{item.temperature}}ºC</span>
            </div>
        </div>
    </section>
</template>

<script>
import Repository from '@/repositories/RepositoryFactory';
const FiveDaysRepository = Repository.get('fiveDays');
const CurrentWeatherRepository = Repository.get('currentWeather');

export default {
    name: 'Weather',
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
