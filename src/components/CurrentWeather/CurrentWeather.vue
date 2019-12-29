<template>
    <div class="current">
        <div class="container">
            <div class="current-main">
                <div class="current-main--location">{{cityName}}</div>
                <div class="current-main--time">{{info.hour}} — {{info.date}}</div>
                <div class="current-main--temp">
                    <span class="current-main--temp-text">{{Math.round(info.temperature)}}</span>
                    <span class="current-main--temp-symbol">º</span>
                </div>
                <div class="current-main--conditions">
                    <div class="current-main--conditions-icon"></div>
                    <div class="current-main--conditions-text">{{info.stateDescription}}</div>
                </div>
            </div>
            <div class="current-details">
                <div class="current-details--title">
                    <span>Detalles</span>
                </div>
                <div class="current-details--item">
                    <div class="current-details--subtitle">Viento</div>
                    <div class="current-details--content">
                        <span class="current-details--sub">{{info.windAngle}}</span>
                        {{info.windSpeed}}
                        <span class="current-details--units">km/h</span>
                    </div>
                    <div class="current-details--icon"></div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--subtitle">Nubosidad</div>
                    <div class="current-details--content">
                        {{info.clouds}}
                        <span class="current-details--units">%</span>
                    </div>
                    <div class="current-details--icon"></div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--subtitle">Humedad</div>
                    <div class="current-details--content">
                        {{info.humidity}}
                        <span class="current-details--units">%</span>
                    </div>
                    <div class="current-details--icon"></div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--subtitle">Presión</div>
                    <div class="current-details--content">
                        {{info.pressure}}
                        <span class="current-details--units">mBar</span>
                    </div>
                    <div class="current-details--icon"></div>
                </div>
            </div>
            <div class="current-details">
                <div class="current-details--title">
                    <span>Salida/Puesta de sol</span>
                </div>
                <div class="current-details--item">
                    <div class="current-details--subtitle">Salida sol</div>
                    <div class="current-details--content">{{info.sunrise}}</div>
                    <div class="current-details--icon"></div>
                </div>
                <div class="current-details--item">
                    <div class="current-details--subtitle">Puesta sol</div>
                    <div class="current-details--content">{{info.sunset}}</div>
                    <div class="current-details--icon"></div>
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
    @import './CurrentWeather.css';
</style>
