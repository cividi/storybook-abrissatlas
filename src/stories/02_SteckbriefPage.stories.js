import vuetify from "@/plugins/vuetify";
import Steckbrief from '@/components/Steckbrief';

export default {
  title: 'AbrissAtlas/Molecules',
  component: Steckbrief,
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { Steckbrief },
  template: "<v-navigation-drawer permanent width=\"400\"><steckbrief v-bind='$props' /></v-navigation-drawer>"
});

export const SteckbriefMolecule = Template.bind({});
SteckbriefMolecule.args = {
  object: {
    images: [
      {
        path: "assets/image1.jpg",
      },
      {
        path: "assets/image4.jpg",
      },
    ],
    data: {
      title: "Isel 1a",
      subtitle: "8867 Niederurnen",
      description: "Einfamilienhaus. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      moreinfo: "Ersatzneubau. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      other: null,
      constructionYear: "1940",
      demolitionYear: "2022",
      commentAuthor: "Hans",
      comment: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    }
  }
};
