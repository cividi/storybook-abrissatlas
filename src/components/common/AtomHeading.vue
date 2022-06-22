<template>
  <div :class="[`text-h${order}`, 'fit', underlined ? 'underlined' : null]" :style="cssProps">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.fit {
  width: fit-content;
  // line-height: var(--line-height) !important;
  // padding-top: var(--padding-top) !important;
  padding-bottom: var(--padding-bottom) !important;
}
.underlined {
  border-bottom: var(--border-bottom-size) solid black;
}
</style>

<script>
import "@/assets/main.css";
export default {
  name: "atom-heading",
  props: {
    content: {
      type: String,
    },
    order: {
      type: Number,
      default: 3,
    }, 
    underlined: {
      type: Boolean,
      default: true,
    },
    // lineHeight: {
    //   type: Number,
    //   default: 1
    // },
    underlineWidth: {
      type: Number,
      default: 12
    },
    underlineDistance: {
      type: Number,
      default: 0
    }
  },
  computed: {
    cssProps() {
      return {
        '--border-bottom-size': `${(this.underlineWidth * (1-this.order/6))}px`,
        // '--line-height': `${this.lineHeight}em`,
        '--padding-bottom': `${this.underlineDistance}em`,
        // '--padding-top': `${(1-this.lineHeight/4)}em`
      }
    }
  }
};
</script>
