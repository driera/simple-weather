<template>
    <section>
        <div>WEATHER</div>
        <div v-for="item in weatherData.list" :key="item.dt">
            {{ item.dt_txt }}: {{item.weather[0].main}}: {{item.main.temp}}ºC
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

</style>
