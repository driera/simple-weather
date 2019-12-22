<template>
    <section>
        <div>WEATHER With API Call to Open Weather Map</div>
        <div v-for="item in info.list" :key="item.dt">
            <div>{{ item.dt_txt }}: {{item.weather[0].main}}: {{item.main.temp}}ºC</div>
        </div>
    </section>
</template>

<script>
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
            const {data} = await FiveDaysRepository.get(this.cityID, this.daysCount, this.API);
            this.info = data;
        }
    },
    mounted() {
        this.getFiveDays();
    }
};
</script>

<style>

</style>
