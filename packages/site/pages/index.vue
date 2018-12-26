<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6> </v-flex>
    <h1>Home</h1>
  </v-layout>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({
  head() {
    return {
      title: "Cowlick",
      titleTemplate: ""
    };
  }
})
export default class extends Vue {}
</script>
