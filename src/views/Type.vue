<template>
  <article v-if="morphemes && tokens">
    <div class="line-label">Type</div>
    <h1>{{ gloss_item }}</h1>

    <p v-if="ungrammatical" class="warning">
      <strong>Ungrammatical?</strong>
      This type is claimed not to normally occur in natural speech.
    </p>

    <div class="line-label">In English</div>
    <h3>{{ en_trans }}</h3>

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
          <Morpheme :morpheme="Gloss" />
        </td>
        <td>
          <VowelQuality>{{ VowQual }}</VowelQuality>
        </td>
      </tr>
    </table>

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
import VowelQuality from "@/components/VowelQuality.vue";

export default {
  props: ["typeId"],
  components: { Morpheme, Token, VowelQuality },
  data() {
    return {
      gloss_item: null,
      en_trans: null,
      morphemes: null,
      tokens: null,
    };
  },
  computed: {
    ungrammatical() {
      return this.gloss_item && this.gloss_item[0] == "*";
    },
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

<style scoped>
.warning {
  color: #dd9440;
  font-size: smaller;
}
</style>
