<template>
    <section>
        <div>WEATHER With API Call to Open Weather Map</div>
        <div v-for="item in info.list" :key="item.dt">
            <span>{{ item.dt_txt }}</span>
            :
            <span>{{item.weather[0].main}}</span>
            :
            <span>{{item.main.temp}}ºC</span>
        </div>
    </section>
</template>

<script>
import valenciaWeather from '@/data/valenciaFiveDays.json';
import Repository from '@/repositories/RepositoryFactory';
const FiveDaysRepository = Repository.get('fiveDays');

export default {
    name: 'WeatherWithApi',
    data() {
        return {
            info: {},
            API: process.env.VUE_APP_WEATHER_API,
            cityID: '2509954',
            daysCount: 40
        };
    },
    methods: {
        getFiveDays: async function() {
            try {
                const {data} = await FiveDaysRepository.get(this.cityID, this.daysCount, this.API);
                this.info = data;
            } catch(e) {
                this.info = valenciaWeather;
                throw new Error(`Error calling fiveDays API. Using fallback`);
            }
        }
    },
    mounted() {
        this.getFiveDays();
    }
};
</script>

<style>
    @import 'Weather.css';
</style>
