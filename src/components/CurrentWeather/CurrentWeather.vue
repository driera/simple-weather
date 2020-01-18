<template>
    <div v-if="info" class="current">
        <div class="container">
            <div class="current-main">
                <div class="current-main--location">{{cityName}}</div>
                <div class="current-main--time">{{info.hour}} — {{info.date}}</div>
                <div class="current-main--temp">
                    <span class="current-main--temp-text">{{Math.round(info.temperature)}}</span>
                    <span class="current-main--temp-symbol">º</span>
                </div>
                <div class="current-main--conditions">
                    <component :is="info.stateIcon" class="current-main--conditions-icon"></component>
                    <div class="current-main--conditions-text">{{info.stateDescription}}</div>
                </div>
            </div>
            <div class="current-details">
                <div class="current-details--title">
                    <span>Detalles</span>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Viento</div>
                        <span class="current-details--sub">{{info.windAngle}}</span>
                        {{info.windSpeed}}
                        <span class="current-details--units">km/h</span>
                    </div>
                    <div class="current-details--icon">
                        <icon-wind class="current-details--icon"></icon-wind>
                    </div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Nubosidad</div>
                        {{info.clouds}}
                        <span class="current-details--units">%</span>
                    </div>
                    <div class="current-details--icon">
                        <icon-cloud></icon-cloud>
                    </div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Humedad</div>
                        {{info.humidity}}
                        <span class="current-details--units">%</span>
                    </div>
                    <div class="current-details--icon">
                        <icon-raindrop></icon-raindrop>
                    </div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Presión</div>
                        {{info.pressure}}
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
                        {{info.sunrise}}
                    </div>
                    <div class="current-details--icon">
                        <icon-sunrise></icon-sunrise>
                    </div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--content">
                        <div class="current-details--subtitle">Puesta sol</div>
                        {{info.sunset}}
                    </div>
                    <div class="current-details--icon">
                        <icon-sunset></icon-sunset>
                    </div>
                </div>
            </div>
            <div class="current-log">{{ info }}</div>
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
    @import '../../assets/styles/helpers/variables';
    @import './CurrentWeather';
</style>
