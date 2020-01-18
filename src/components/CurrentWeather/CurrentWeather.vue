<template>
    <div v-if="weatherData" class="current">
        <div class="container">
            <h1>kjadsn</h1>
            <div class="current-main">
                <div class="current-main--location">{{weatherData.city}}</div>
                <div class="current-main--time">{{weatherData.hour}} — {{weatherData.date}}</div>
                <div class="current-main--temp">
                    <span class="current-main--temp-text">{{Math.round(weatherData.temperature)}}</span>
                    <span class="current-main--temp-symbol">º</span>
                </div>
                <div class="current-main--conditions">
                    <component :is="weatherData.stateIcon" class="current-main--conditions-icon"></component>
                    <div class="current-main--conditions-text">{{weatherData.stateDescription}}</div>
                </div>
            </div>
            <div class="current-details">
                <div class="current-details--title">
                    <span>Detalles</span>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Viento</div>
                        <span class="current-details--sub">{{weatherData.windAngle}}</span>
                        {{weatherData.windSpeed}}
                        <span class="current-details--units">km/h</span>
                    </div>
                    <div class="current-details--icon">
                        <icon-wind class="current-details--icon"></icon-wind>
                    </div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Nubosidad</div>
                        {{weatherData.clouds}}
                        <span class="current-details--units">%</span>
                    </div>
                    <div class="current-details--icon">
                        <icon-cloud></icon-cloud>
                    </div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Humedad</div>
                        {{weatherData.humidity}}
                        <span class="current-details--units">%</span>
                    </div>
                    <div class="current-details--icon">
                        <icon-raindrop></icon-raindrop>
                    </div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Presión</div>
                        {{weatherData.pressure}}
                        <span class="current-details--units">mBar</span>
                    </div>
                    <div class="current-details--icon">
                        <icon-pressure></icon-pressure>
                    </div>
                </div>
            </div>
            <div class="current-details">
                <div class="current-details--title">
                    <span>Salida/Puesta de sol</span>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Salida sol</div>
                        {{weatherData.sunrise}}
                    </div>
                    <div class="current-details--icon">
                        <icon-sunrise></icon-sunrise>
                    </div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Puesta sol</div>
                        {{weatherData.sunset}}
                    </div>
                    <div class="current-details--icon">
                        <icon-sunset></icon-sunset>
                    </div>
                </div>
            </div>
            <div class="current-log">{{ weatherData }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CurrentWeather',
    props: {
        weatherData: {
            type: Object
        }
    }

};
</script>

<style scoped>
    @import '../../assets/styles/helpers/variables';
    @import './CurrentWeather';
</style>
