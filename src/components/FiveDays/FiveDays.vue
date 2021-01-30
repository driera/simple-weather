<template>
  <section
    v-if="weatherData"
    class="five-days"
  >
    <div class="container">
      <h2 class="five-days--title">
        Tiempo en los próximos 5 días
      </h2>
      <div
        v-for="(date, key) in weatherData"
        :key="key"
        class="day"
      >
        <TitleWithLine
          :content="key"
          :dark="true"
          class="day--title"
        />
        <FiveDaysItem
          v-for="item in date"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FiveDaysItem from "@/components/FiveDays/FiveDaysItem.vue";
import TitleWithLine from "@/components/TitleWithLine.vue";
import { FiveDaysType } from '@/domain/models/FiveDays';

@Component({
  components: { FiveDaysItem, TitleWithLine },
})
export default class FiveDays extends Vue {
  @Prop({default: {}}) weatherData!: FiveDaysType
}

</script>

<style scoped>
@import "../../assets/styles/helpers/variables";

.five-days {
    padding: 30px 0;
    background: hsl(0, 0%, 95%)
}
.five-days--title {
  font-size: 20px;
  margin-bottom: 40px;
}
.day {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;
}
.day--title {
  grid-column: span 2;
}


</style>
