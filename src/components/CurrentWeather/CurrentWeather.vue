<template>
  <div v-if="weatherData" class="current">
    <div class="container">
      <h1>Tiempo hoy</h1>
      <div class="intro">
        <div class="location">{{ weatherData.city }}</div>
        <div class="time">
          {{ weatherData.hour }} — {{ weatherData.date }}
        </div>

        <div class="temp">
          <span>{{ Math.round(weatherData.temperature) }}</span>
          <span class="temp-symbol">º</span>
        </div>

        <div class="conditions">
          <component
            :is="weatherData.stateIcon"
            class="conditions-icon"
          />
          <span>{{ weatherData.stateDescription }}</span>
        </div>
      </div>
      <div class="details">
        <div class="details--title">
          <span>Detalles</span>
        </div>
        <DetailsItem
          title="Viento"
          :content="weatherData.windSpeed"
          :sub="weatherData.windAngle"
          units="km/h"
          icon="icon-wind"
        />
        <DetailsItem
          title="Nubosidad"
          :content="weatherData.clouds"
          units="%"
          icon="icon-cloud"
        />
        <DetailsItem
          title="Humedad"
          :content="weatherData.humidity"
          units="%"
          icon="icon-raindrop"
        />
        <DetailsItem
          title="Presión"
          :content="weatherData.pressure"
          units="mBar"
          icon="icon-pressure"
        />
      </div>
      <div class="details">
        <div class="details--title">
          <span>Salida/Puesta de sol</span>
        </div>
        <DetailsItem
          title="Salida sol"
          :content="weatherData.sunrise"
          icon="icon-sunrise"
        />
        <DetailsItem
          title="Puesta sol"
          :content="weatherData.sunset"
          icon="icon-sunset"
        />
      </div>
      <div class="log">{{ weatherData }}</div>
    </div>
  </div>
</template>

<script>
import DetailsItem from "@/components/DetailsItem";
export default {
  name: "CurrentWeather",
  components: { DetailsItem },
  props: {
    weatherData: {
      type: Object,
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/helpers/variables";
@import "./CurrentWeather";
</style>
