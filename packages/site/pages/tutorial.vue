<template>
  <v-layout column justify-center align-center>
    <h1>チュートリアル</h1>
    <p>
      Cowlickを使ったノベルゲーム作成について簡単に紹介します。<br />
      ここで作成するゲームの完成形はデモをご覧ください。
    </p>
    <v-dialog v-model="tutorial.dialog" persistent max-width="768">
      <v-btn slot="activator" color="primary" dark @click="$store.commit('tutorial/open')"> デモをみる </v-btn>
      <v-card>
        <v-card-title> <span class="headline">チュートリアル デモ</span> </v-card-title>
        <iframe src="/tutorial/demo/index.html" width="100%" style="height: 432px;"></iframe>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat="flat" @click="$store.commit('tutorial/close')">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
