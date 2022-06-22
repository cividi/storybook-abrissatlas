import vuetify from "@/plugins/vuetify";
import GalleryGridPage from './GalleryGridPage';

export default {
  title: 'AbrissAtlas/Pages',
  component: GalleryGridPage,
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { GalleryGridPage },
  template: "<gallery-grid-page />"
});

export const GalleryGrid = Template.bind({});
GalleryGrid.args = {};
