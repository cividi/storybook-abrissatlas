<template>
  <div>
    <v-container>
      <v-row class="mb-2">
        <div class="objectTitle">
          <atom-heading order="4">{{ object.data.title }}</atom-heading>
          <atom-heading order="4">{{ object.data.subtitle }}</atom-heading>
        </div>
        <atom-image-gallery :images="object.images" />
      </v-row>
    </v-container>
    <v-container class="details">
      <atom-data-row label="Baujahr" :detail="object.data.constructionYear" />
      <atom-data-row label="Abrissjahr" :detail="object.data.demolitionYear" />
      <atom-data-row label="Architektur" :detail="object.data.description" />
      <atom-data-row label="Grund" :detail="object.data.moreinfo" />
      <atom-data-row label="Geschichten und Erinnerungen" />
      <atom-data-row
        :label="object.data.commentAuthor"
        :detail="object.data.comment"
      />
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.objectTitle {
  position: fixed;
  top: 0em;
  left: 0;
  z-index: 100;
  text-shadow: 0 0 5px white;
}
.details:last-child {
  border-bottom: 1.5px solid black;
}
</style>

<script>
import "@/assets/main.css";
import AtomImageGallery from "./common/AtomImageGallery";
import AtomHeading from "./common/AtomHeading";
import AtomDataRow from "./common/AtomDataRow";

export default {
  name: "steckbrief",
  props: {
    object: {
      type: Object,
      default: () => ({
        images: [],
        data: {},
      }),
    },
  },
  components: {
    AtomImageGallery,
    AtomHeading,
    AtomDataRow,
  },
};
</script>