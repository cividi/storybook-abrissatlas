<template>
  <v-carousel
    v-if="images.length > 0"
    :height="maxHeight"
    hide-delimiters
    :show-arrows="images.length > 1"
  >
    <v-carousel-item eager v-for="(item, i) in images" :key="i">
      <atom-image :src="item.path"></atom-image>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
</style>

<script>
import "@/assets/main.css";
import AtomImage from "@/components/common/AtomImage.vue";
import { VCarousel, VCarouselItem } from "vuetify/lib";

export default {
  name: "atom-image-gallery",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    maxHeight: {
      type: String,
      default: "400px"
    }
  },
  components: {
    VCarousel,
    VCarouselItem,
    AtomImage,
  },
};
</script>
