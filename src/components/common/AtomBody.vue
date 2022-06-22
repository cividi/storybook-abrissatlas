<template>
  <div :class="[`text-${type}`]">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import "@/assets/main.css";
export default {
  name: "atom-body",
  props: {
    content: {
      type: String,
    },
    type: {
      type: String,
      default: "body-1",
    }
  },
};
</script>
