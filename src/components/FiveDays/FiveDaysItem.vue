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

<script>
export default {
  name: "FiveDaysItem",
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
};
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
