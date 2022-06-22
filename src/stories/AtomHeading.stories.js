import vuetify from "@/plugins/vuetify";
import AtomHeading from '@/components/common/AtomHeading';

export default {
  title: 'AbrissAtlas/Atoms',
  component: AtomHeading,
  argTypes: {
    content: { control: 'text', default: 'Lorem ipsum'},
    order: { control: { type: 'range', min: 1, max: 6, default: 1 } },
    underlined: { control: 'boolean', default: true },
    underlineWidth: { control: { type: 'range', min: 5, max: 20, step: 0.1, default: 7 } },
    underlineDistance: { control: { type: 'range', min: 0, max: 4, step: 0.05, default: 0 } },
    // lineHeight: { control: { type: 'range', min: 0, max: 4, step: 0.05, default: 1 } },
  },
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { AtomHeading },
  template: "<atom-heading v-bind='$props'>Lorem Ipsum</atom-heading>"
});

export const Heading = Template.bind({});
Heading.args = {};
