import vuetify from "@/plugins/vuetify";
import Typography from './Typography';

export default {
  title: 'AbrissAtlas/Design',
  component: Typography,
  argTypes: {
    baseSize: { control: { type: 'range', min: 8, max: 20, step: 0.5, default: 16 } },
    underlineWidth: { control: { type: 'range', min: 5, max: 20, step: 0.1, default: 7 } },
    underlineDistance: { control: { type: 'range', min: 0, max: 4, step: 0.05, default: 0 } }
  }
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { Typography },
  template: "<typography v-bind='$props' />",
});

export const TypographySystem = Template.bind({});
TypographySystem.args = {};
