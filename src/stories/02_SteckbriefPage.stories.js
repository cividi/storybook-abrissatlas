import vuetify from "@/plugins/vuetify";
import SteckbriefPage from './SteckbriefPage';

export default {
  title: 'AbrissAtlas/Pages',
  component: SteckbriefPage,
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { SteckbriefPage },
  template: "<steckbrief-page />"
});

export const Steckbrief = Template.bind({});
Steckbrief.args = {};
