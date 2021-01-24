<template>
  <div class="item">
    <div class="content">
      <div class="title">{{ title }}</div>
      <span class="sub" v-if="sub">{{ sub }}</span>
      {{ content }}
      <span class="units" v-if="units">{{ units }}</span>
    </div>
    <div class="icon">
      <component :is="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsItem",
  props: {
    title: String,
    sub: String,
    content: String,
    units: String,
    icon: String,
  },
};
</script>

<style scoped>
@import "../assets/styles/helpers/variables";

.item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 20px 10px 5px;
  background: color-mod(var(--light-color) a(5%));
  border-radius: 3px;
}

.content {
  position: relative;
  font-size: 18px;
  font-weight: 800;
}

.title {
  position: absolute;
  bottom: 100%;
  left: 0;
  font-size: 12px;
  font-weight: 300;
}

.units {
  font-size: 12px;
}

.sub {
  font-size: 13px;
}

.icon {
  font-size: 40px;
}
</style>
