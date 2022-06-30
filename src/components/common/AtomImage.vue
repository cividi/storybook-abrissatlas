<template>
  <v-img
    class="fill-height requestable-filter"
    align="center"
    justify="center"
    :src="src"
    contain
   />
</template>

<style lang="scss" scoped>
.requestable-filter {
  filter: grayscale(100%) brightness(110%);
  opacity: 1 !important;
}
</style>

<script>
import { VImg } from "vuetify/lib";
import "@/assets/main.css";

export default {
  name: "atom-image",
  components: {
    VImg
  },
  props: {
    src: {
      type: String,
    }
  },
};
</script>
