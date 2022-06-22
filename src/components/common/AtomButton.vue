<template>
  <v-btn color="primary" class="text-button">
    <slot>
      {{ content }}
    </slot>
  </v-btn>
</template>

<style lang="scss" scoped>
</style>

<script>
import { VBtn } from "vuetify/lib";
import "@/assets/main.css";
export default {
  name: "atom-body",
  components: {
    VBtn
  },
  props: {
    content: {
      type: String,
    }
  },
};
</script>
