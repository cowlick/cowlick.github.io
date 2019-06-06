<template>
  <v-layout column justify-center align-center>
    <h1>チュートリアル</h1>
    <p>
      Cowlickを使ったノベルゲーム作成について簡単に紹介します。<br />
      ここで作成するゲームの完成形はデモをご覧ください。
    </p>
    <v-card>
      <v-card-title> <span class="headline">チュートリアル デモ</span> </v-card-title>
      <iframe src="/tutorial/demo/index.html" style="width: 768px; height: 432px;"></iframe>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {State} from "vuex-class";
import Tutorial from "~/model/Tutorial";

@Component({
  head() {
    return {
      title: "チュートリアル"
    };
  }
})
export default class extends Vue {
  @State
  tutorial!: Tutorial;
}
</script>
