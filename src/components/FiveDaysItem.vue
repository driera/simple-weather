<template>
  <div class="weather-item">
    <span>{{ data.time }}</span>
    :
    <span>{{ data.state }}</span>
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
    data: Object,
  },
};
</script>

<style lang="postcss" scoped>
.weather-item {
  padding: 20px 10px 10px;
  background: color-mod(var(--light-color) a(50%));
  border-radius: 5px
}
</style>
