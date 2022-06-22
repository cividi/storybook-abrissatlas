<template>
  <v-container :style="cssProps">
    <v-col>
      <h1 class="text-h3 annotation">Typography System</h1>
      <p class="annotation">
        Based on <a href="https://vuetifyjs.com/en/styles/text-and-typography/" target="_blank">Vuetify Framework</a>, derived from the Material Design Specification.
      </p>
      <p>
        &nbsp;
      </p>
      <h3 class="caption annotation">1. Headlines w/ underline</h3>
      <v-row
        v-for="[c, text, size, weight, spacing, margin] in headings"
        key="c"
      >
        <v-col
          cols="8"
          ><component is="atom-heading"
            :order="c"
            :underlineWidth="underlineWidth"
            :underlineDistance="underlineDistance"
            >Heading {{ c }}</component
          ></v-col
        >
        <v-col
          cols="4"
          ><div class="caption annotation">
            Font: Helvetica Neue LT W05 75 Bold<br />Size: {{ size
            }}<br />Weight: {{ weight }}<br />Letter Spacing: {{ spacing }}<br>
            Underline Width: {{ (underlineWidth * (1 - c / 6) ) }}px<br>Underline Distance: {{ underlineDistance }}em
          </div></v-col
        >
      </v-row>

      <v-row>
        <caption class="caption annotation">2. Headlines w/o underline</caption>
      </v-row>
      <v-row
        v-for="[c, text, size, weight, spacing, margin] in headings"
        key="c"
      >
        <v-col
          cols="8"
          ><component is="atom-heading" :order="c" :underlined="false"
            >Heading {{ c }}</component
          ></v-col
        >
        <v-col
          cols="4"
          ><div class="caption annotation">
            Font: Helvetica Neue LT W05 75 Bold<br />Size: {{ size
            }}<br />Weight: {{ weight }}<br />Letter Spacing: {{ spacing }}
          </div></v-col
        >
      </v-row>

      <v-row>
        <caption class="caption annotation">3. Body Text</caption>
      </v-row>
      <v-row v-for="[c, text, size, weight, spacing, margin] in bodies" key="c">
        <v-col
          cols="8"
          ><component is="atom-body" :type="c"
            >{{ c }}<br />Lorem ipsum, dolor site amet</component
          ></v-col
        >
        <v-col
          cols="4"
          ><div class="caption annotation">
            Font: Queue<br />Size: {{ size }}<br />Weight: {{ weight
            }}<br />Letter Spacing: {{ spacing }}
          </div></v-col
        >
      </v-row>
    </v-col>
  </v-container>
</template>

<style lang="scss">
#root {
  font-size: var(--base-size)
}

.caption {
  margin-left: 1em;
}
.annotation {
  color: rgb(122, 53, 53);
  font-weight: 500;
  font-family: 'Helvetica Neue', 'Arial', sans-serif !important;
}
</style>

<script>
import AtomHeading from "@/components/common/AtomHeading";
import AtomBody from "@/components/common/AtomBody";
import "@/assets/main.css";

export default {
  name: "typography",
  components: {
    AtomHeading,
    AtomBody,
  },
  props: {
    underlineWidth: {
      type: Number,
      default: 12
    },
    underlineDistance: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    headings: [
      ["1", "Heading 1", "6rem (96px)", "700", "normal", -1],
      ["2", "Heading 2", "3.75rem (60px)", "700", "normal", 0],
      ["3", "Heading 3", "3rem (48px)", "700", "normal", 1],
      ["4", "Heading 4", "2.125rem (34px)", "700", "normal", 2],
      ["5", "Heading 5", "1.5rem (24px)", "700", "normal", 2],
      ["6", "Heading 6", "1.25rem (20px)", "700", "normal", 3],
    ],
    bodies: [
      ["subtitle-1", "Subtitle 1", "1rem", "400", ".009375em", 4],
      ["subtitle-2", "Subtitle 2", "0.875rem", "500", ".0071428571em", 4],
      ["body-1", "Body 1", "1rem", "400", "normal", 4],
      ["body-2", "Body 2", "0.875rem", "400", "normal", 4],
      ["button", "Button", "0.875rem", "500", ".0892857143em", 4],
      ["caption", "Caption", "0.75rem", "400", ".0333333333em", 4],
      ["overline", "Overline", "0.75rem", "500", ".1666666667em", 4],
    ],
  }),
};
</script>
