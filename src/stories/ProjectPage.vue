<template>
  <v-container>
    <v-row>
      <atom-heading order="1">Project Name</atom-heading>
    </v-row>
    <v-row>
      <v-col cols="6">
      <atom-heading order="2" :underlined="false">Main Heading</atom-heading>
      <atom-body>
        Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus
        non, euismod id, nulla. Fusce convallis metus id felis luctus
        adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis
        sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent
        venenatis metus at tortor pulvinar varius. Donec venenatis vulputate
        lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
      </atom-body>
      <atom-body>
        <ul>
          <li><a href="#">List with Link #1</a></li>
          <li><a href="#">Link #2</a></li>
          <li>and an unlinked entry</li>
        </ul>
      </atom-body>
      <atom-heading order="3" :underlined="false">Sub Heading</atom-heading>
      <atom-body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra, orci eget vestibulum imperdiet, tellus nisl rutrum nisl, vehicula ornare massa odio non massa. Pellentesque lobortis quam et massa feugiat, id pretium lacus ullamcorper. Aliquam ac vestibulum ipsum, in accumsan arcu. Duis efficitur quis quam a consectetur. Duis accumsan purus dui, a porta dui blandit vitae. In et posuere nisi. Donec porta feugiat dui, ut lobortis diam luctus molestie. Mauris eget tempor lacus. Morbi diam nibh, cursus vel interdum sed, scelerisque at augue. Maecenas sed libero sed sapien blandit aliquam mollis ac elit. Praesent nec nibh molestie, egestas urna a, euismod sem.
      </atom-body>
      <atom-body>
        Nunc id nunc iaculis, ullamcorper libero eget, viverra eros. Etiam malesuada cursus velit. Integer consequat neque blandit mauris dignissim, non sodales sapien congue. Nullam mauris dolor, tristique vitae tortor sed, finibus vulputate metus. Maecenas posuere, risus et dignissim efficitur, dolor leo malesuada ex, ac sagittis mi lacus eget urna. Donec dapibus augue ac tortor cursus faucibus. Proin scelerisque accumsan magna id rutrum. Nulla tincidunt a tellus vel tempus. Praesent volutpat est quis leo mattis, non blandit nisi ornare.
      </atom-body>
      <atom-body>
        Aliquam ut lacinia nisl, eget volutpat metus. Vestibulum suscipit pharetra molestie. Nullam pharetra justo vel libero sodales, sit amet viverra enim vestibulum. Vestibulum egestas ipsum at purus maximus hendrerit. Curabitur eget lectus turpis. Aliquam convallis volutpat orci, nec luctus sem fermentum sed. Quisque quis dolor libero. Vivamus at ornare libero. Fusce scelerisque risus eu nisl porta semper. Curabitur enim ante, fringilla et felis et, auctor molestie massa. Mauris laoreet eleifend venenatis. Nulla auctor turpis sed dapibus rhoncus. Morbi condimentum libero sed mi pellentesque placerat.
      </atom-body>
      <atom-button>Call to action</atom-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AtomHeading from "@/components/common/AtomHeading";
import AtomBody from "@/components/common/AtomBody";
import AtomButton from "@/components/common/AtomButton";
import "@/assets/main.css";

export default {
  name: "project-page",
  components: {
    AtomHeading,
    AtomBody,
    AtomButton
  },
};
</script>