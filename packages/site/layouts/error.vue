<template>
  <v-layout column justify-center align-center>
    <h1>エラーが発生しました</h1>
    <img src="/aco/notfound.png" />
  </v-layout>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({
  head() {
    return {
      title: "エラー"
    };
  }
})
export default class extends Vue {}
</script>
