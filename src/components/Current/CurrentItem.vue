<template>
  <div class="item">
    <div class="content">
      <div class="title">
        {{ title }}
      </div>
      <span
        v-if="sub"
        class="sub"
      >{{ sub }}</span>
      {{ content }}
      <span
        v-if="units"
        class="units"
      >{{ units }}</span>
    </div>
    <div class="icon">
      <component :is="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CurrentItem extends Vue {
  @Prop({default: ''}) title!: string
  @Prop({default: ''}) sub!: string
  @Prop({default: ''}) content!: string
  @Prop({default: ''}) units!: string
  @Prop({default: ''}) icon!: string
}
</script>

<style lang="postcss" scoped>
@import "../../assets/styles/helpers/variables";

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
