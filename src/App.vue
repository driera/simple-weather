<template>
  <div id="app">
    <current :weather-data="current" />
    <five-days :weather-data="fiveDays" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Current from '@/components/Current/Current.vue';
import FiveDays from '@/components/FiveDays/FiveDays.vue';
import FiveDaysRepository from './repositories/FiveDaysRepository';
import CurrentWeatherRepository from './repositories/CurrentWeatherRepository';
import { CurrentWeatherType } from '@/domain/models/CurrentWeather';
import { FiveDaysType } from './domain/models/FiveDays';

@Component({
  components: {
    Current,
    FiveDays
  }
})
export default class App extends Vue{    
  private fiveDays: FiveDaysType = {
    "today": [{
      id: 0,
      pressure: 0,
      state: "",
      stateDescription: "",
      stateIcon: "",
      temperature: 0,
      temperatureMax: 0,
      temperatureMin: 0,
      time: "",
      windAngle: 0,
      windSpeed: 0,
    }]
  }
  private current: CurrentWeatherType = {
    city: "",
    clouds: 0,
    date: "",
    hour: "",
    humidity: 0,
    pressure: 0,
    state: "",
    stateDescription: "",
    stateIcon: "",
    sunrise: "",
    sunset: "",
    temperature: 0,
    temperatureMax: 0,
    temperatureMin: 0,
    windAngle: "",
    windSpeed: 0,
  }
  private cityID = '2509954'
  private daysCount = '40';

  public async loadData(): Promise<void> {
      this.fiveDays = await FiveDaysRepository.get(this.cityID, this.daysCount);
      this.current = await CurrentWeatherRepository.get(this.cityID);
  }
  created() {
    this.loadData();
  }
}
</script>

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,400i,600,800&display=swap');
    @import './assets/styles/styles.css';
</style>
