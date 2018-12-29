<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6> </v-flex>
    <p>CowlickはJavaScriptで動作するノベルゲームエンジンです。<br /></p>
    <h2>RPGアツマールやニコニコ新市場へ投稿可能</h2>
    <p>Akashic Engine用のツールを使うことで、簡単にRPGアツマールやニコニコ新市場へノベルゲームが投稿できます。</p>
    <h2>オープンソース</h2>
    <p>CowlickはMITライセンスで配布しているため、無償で利用できます。</p>
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
