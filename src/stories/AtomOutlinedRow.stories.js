import vuetify from "@/plugins/vuetify";
import AtomOutlinedRow from '@/components/common/AtomOutlinedRow';

export default {
  title: 'AbrissAtlas/Atoms',
  component: AtomOutlinedRow,
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { AtomOutlinedRow },
  template: "<atom-outlined-row v-bind='$props'>Testrow</atom-outlined-row>"
});

export const OutlinedRow = Template.bind({});
OutlinedRow.args = {};
