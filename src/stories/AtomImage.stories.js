import vuetify from "@/plugins/vuetify";
import AtomImage from '@/components/common/AtomImage';

export default {
  title: 'AbrissAtlas/Atoms',
  component: AtomImage,
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { AtomImage },
  template: "<atom-image v-bind='$props' />",
});

export const Image = Template.bind({});
Image.args = {
  src: "assets/image4.jpg",
};
