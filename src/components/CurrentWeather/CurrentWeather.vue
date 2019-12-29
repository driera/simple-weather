<template>
    <div class="current">
        <div class="container">
            {{ info }}
        </div>
    </div>
</template>

<script>
import Repository from '@/repositories/RepositoryFactory';
const CurrentWeatherRepository = Repository.get('currentWeather');

export default {
    name: 'CurrentWeather',
    data() {
        return {
            info: null,
            cityName: 'Valencia',
            cityID: '2509954'
        };

    },
    methods: {
        async getCurrentWeather() {
            this.info = await CurrentWeatherRepository.get(this.cityID);
        }
    },
    created() {
        this.getCurrentWeather();
    }

};
</script>

<style scoped>
    @import './CurrentWeather.css';
</style>
