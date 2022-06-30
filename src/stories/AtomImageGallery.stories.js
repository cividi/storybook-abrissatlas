import vuetify from "@/plugins/vuetify";
import AtomImageGallery from '@/components/common/AtomImageGallery';

export default {
  title: 'AbrissAtlas/Atoms',
  component: AtomImageGallery,
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { AtomImageGallery },
  template: "<v-navigation-drawer permanent width=\"400px\"><atom-image-gallery v-bind='$props' /></v-navigation-drawer>",
});

export const ImageGallery = Template.bind({});
ImageGallery.args = {
  images: [
    {
      path: "assets/image1.jpg",
    },
    {
      path: "assets/image2.jpg",
    },
    {
      path: "assets/image3.jpg",
    },
    {
      path: "assets/image4.jpg",
    },
  ],
};
