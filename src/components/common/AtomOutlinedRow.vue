<template>
  <v-row class="outlined py-1 px-0">
    <slot></slot>
  </v-row>
</template>

<script>
export default {
  name: "atom-outlined-row"
}
</script>

<style>
.outlined {
  border-top: 1.5px solid black;
}
</style>