<template>
  <article v-if="morphemes && tokens">
    <div class="line-label">Phrase</div>
    <h1>{{ gloss_item }}</h1>
    <table v-if="morphemes.length">
      <tr>
        <th>Morpheme</th>
        <th>Gloss</th>
        <th>Vowel quality</th>
      </tr>
      <tr v-for="({ Morpheme, Gloss, VowQual }, i) in morphemes" :key="i">
        <td>
          <router-link
            :to="{
              name: 'morpheme',
              params: { morpheme: Morpheme },
            }"
          >
            <Morpheme :morpheme="Morpheme" />
          </router-link>
        </td>
        <td>
          {{ Gloss }}
        </td>
        <td>{{ VowQual }}</td>
      </tr>
    </table>

    <div class="line-label">In English</div>
    <h2>{{ en_trans }}</h2>

    <div v-if="tokens.length">
      <h3>Recordings</h3>
      <Token v-for="token in tokens" :key="token.lpnr" v-bind="token" />
    </div>
  </article>
</template>

<script>
import { getType } from "@/assets/db";
import Morpheme from "@/components/Morpheme";
import Token from "@/components/Token";

export default {
  props: ["typeId"],
  components: { Morpheme, Token },
  data() {
    return {
      gloss_item: null,
      en_trans: null,
      morphemes: null,
      tokens: null,
    };
  },
  watch: {
    typeId: {
      immediate: true,
      async handler() {
        const type = await getType(this.typeId);
        this.gloss_item = type.gloss_item;
        this.en_trans = type.en_trans;
        this.morphemes = type.morphemes;
        this.tokens = type.tokens;
      },
    },
  },
};
</script>

<style>
</style>
