import vuetify from "@/plugins/vuetify";
import ProjectPage from './ProjectPage';

export default {
  title: 'AbrissAtlas/Pages',
  component: ProjectPage,
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { ProjectPage },
  template: "<project-page />"
});

export const About = Template.bind({});
About.args = {};
