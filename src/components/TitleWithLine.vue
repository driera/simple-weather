<template>
  <div
    class="title"
    :class="{'is-dark': dark}"
  >
    <span>{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: "TitleWithLine",
  props: {
    content: {
      type: String,
      default: "A title"
    },
    dark: Boolean
  },

}
</script>

<style lang="postcss" scoped>
  @import "../assets/styles/helpers/variables";

  .title {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 10px;
    align-items: center;
    font-size: 12px;
    text-transform: uppercase;

    &:after {
      content: "";
      height: 1px;
      border-top: var(--thin-line);
    }

    &.is-dark:after {
      border-top: var(--thin-line-dark);
    }
  }
</style>
