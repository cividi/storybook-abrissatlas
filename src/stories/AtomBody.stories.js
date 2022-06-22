import vuetify from "@/plugins/vuetify";
import AtomBody from '@/components/common/AtomBody';

export default {
  title: 'AbrissAtlas/Atoms',
  component: AtomBody,
  argTypes: {
    content: { control: 'text', default: 'Lorem ipsum'},
    underlined: { control: 'boolean', default: true },
    order: { control: { type: 'range', min: 1, max: 6, default: 1 } },
  },
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { AtomBody },
  template: "<atom-body v-bind='$props'>Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.</atom-body>"
});

export const Body = Template.bind({});
Body.args = {};
