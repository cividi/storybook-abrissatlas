<template>
  <atom-outlined-row>
    <v-col class="px-0 py-0" type="body-1">
      <span class="caption" v-if="detail">{{ label }}:</span>
      <span class="caption" v-else>{{ label }}</span>
      {{ detail }}
    </v-col>
  </atom-outlined-row>
</template>

<script>
import AtomOutlinedRow from '@/components/common/AtomOutlinedRow.vue'

export default {
  name: "atom-data-row",
  components: {
    AtomOutlinedRow
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    detail: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.caption {
  margin-left: 0;
}
</style>>
