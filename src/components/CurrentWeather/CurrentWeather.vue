<template>
  <section v-if="weatherData" class="current">
    <div class="container">
      <h1 class="current--title">Tiempo hoy</h1>
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
        <TitleWithLine content="Detalles" class="details--title" />
        <CurrentItem
          title="Viento"
          :content="weatherData.windSpeed"
          :sub="weatherData.windAngle"
          units="km/h"
          icon="icon-wind"
        />
        <CurrentItem
          title="Nubosidad"
          :content="weatherData.clouds"
          units="%"
          icon="icon-cloud"
        />
        <CurrentItem
          title="Humedad"
          :content="weatherData.humidity"
          units="%"
          icon="icon-raindrop"
        />
        <CurrentItem
          title="Presión"
          :content="weatherData.pressure"
          units="mBar"
          icon="icon-pressure"
        />
      </div>
      <div class="details">
        <TitleWithLine content="Salida/Puesta de sol" class="details--title" />
        <CurrentItem
          title="Salida sol"
          :content="weatherData.sunrise"
          icon="icon-sunrise"
        />
        <CurrentItem
          title="Puesta sol"
          :content="weatherData.sunset"
          icon="icon-sunset"
        />
      </div>
      <div class="log">{{ weatherData }}</div>
    </div>
  </section>
</template>

<script>
import CurrentItem from "@/components/CurrentItem";
import TitleWithLine from "@/components/TitleWithLine";

export default {
  name: "CurrentWeather",
  components: { CurrentItem, TitleWithLine },
  props: {
    weatherData: {
      type: Object,
    },
  },
};
</script>

<style lang="postcss" scoped>
@import "../../assets/styles/helpers/variables";
@import "./CurrentWeather";
</style>
