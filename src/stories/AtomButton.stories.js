import vuetify from "@/plugins/vuetify";
import AtomButton from '@/components/common/AtomButton';

export default {
  title: 'AbrissAtlas/Atoms',
  component: AtomButton,
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { AtomButton },
  template: "<atom-button v-bind='$props'>Lorem Ipsum</atom-button>"
});

export const Button = Template.bind({});
Button.args = {};
