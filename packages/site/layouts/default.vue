<template>
  <v-app>
    <Toolbar />
    <v-content>
      <v-container> <nuxt /> </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import Toolbar from "~/components/Toolbar.vue";
import Footer from "~/components/Footer.vue";

@Component({
  components: {
    Toolbar,
    Footer
  }
})
export default class extends Vue {}
</script>
