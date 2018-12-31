<template>
  <v-toolbar color="primary" dark>
    <router-link to="/"> <img src="/logo.png" height="32px" /> </router-link>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="route in router.routes" :key="route.title" :to="route.link" exact flat>
        <span v-text="route.title" />
      </v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="route in router.routes" :key="route.title" @click="$router.push(route.link)">
          <v-list-tile-content>
            <v-list-tile-title>{{ route.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {State} from "vuex-class";
import {Router} from "~/model/Router";

@Component
export default class extends Vue {
  @State
  router: Router;
}
</script>
