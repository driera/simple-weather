<template>
  <div class="weather-item">
    <span>{{ data.time }}</span>
    <div class="icon">
      <component :is="data.stateIcon" />
    </div>
    <span>{{ data.stateDescription }}</span>
    :
    <span>{{ data.temperature }}ºC</span>
    :
    <span>{{ data.windSpeed }}<sup>km/h</sup></span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { OneDayType } from '@/domain/models/FiveDays';

@Component
export default class FiveDaysItem extends Vue {
  @Prop() data!: OneDayType
}
</script>

<style lang="postcss" scoped>
@import "../../assets/styles/helpers/variables";

.weather-item {
  padding: 20px 10px 10px;
  background: color-mod(var(--light-color) a(50%));
  border-radius: 5px
}

.icon {
  font-size: 40px;
  color: var(--dark-color);
}
</style>
