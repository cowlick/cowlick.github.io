<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6> </v-flex>
    <p>ここではその他雑多なことについて触れます。</p>
    <h2>アコ（仮）</h2>
    <p>
      アコ（仮）はCowlickの公式キャラクター……の予定です。<br />
      現状はチュートリアルキャラクターとしての役割を担っています。
    </p>
    <img src="/aco/sample1.jpg" width="375px" />
  </v-layout>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component
export default class extends Vue {}
</script>
