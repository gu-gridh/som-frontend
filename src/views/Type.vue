<template>
  <article v-if="morphemes && tokens">
    <div class="line-label">
      <InfoLabel v-if="ungrammatical">
        Type
        <template v-slot:info>
          Types marked with an asterisk (<strong>*</strong>) are claimed not to
          occur normally in natural speech.
        </template>
      </InfoLabel>
      <template v-else> Type </template>
    </div>
    <h1>
      {{ gloss_item }}
    </h1>

    <div class="line-label">In English</div>
    <h3>{{ en_trans }}</h3>

    <section>
      <MorphemeList v-if="morphemes.length" :morphemes="morphemes" />
    </section>

    <div v-if="tokens.length">
      <h3>
        <InfoLabel :disabled="!hasVowelQuality">
          Recordings
          <template v-slot:info>
            <p>
              Vowel quality symbols describe each syllable in the token. A
              single symbol may be there to denote all syllables.
            </p>
            <p>
              <VowelQuality>L</VowelQuality>: <em>light</em><br />
              <VowelQuality>M</VowelQuality>: <em>medium</em><br />
              <VowelQuality>H</VowelQuality>: <em>heavy</em>
            </p>
          </template>
        </InfoLabel>
      </h3>
      <Token v-for="token in tokens" :key="token.lpnr" v-bind="token" />
    </div>
  </article>
</template>

<script>
import { getType } from "@/assets/db";
import MorphemeList from "@/components/MorphemeList.vue";
import Token from "@/components/Token.vue";
import VowelQuality from "@/components/VowelQuality.vue";
import InfoLabel from "@/components/InfoLabel.vue";

export default {
  props: ["typeId"],
  components: { MorphemeList, Token, VowelQuality, InfoLabel },
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
    hasVowelQuality() {
      return this.tokens && this.tokens.some((token) => token.Vowel_quality);
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
        this.$store.commit("setTitle", this.gloss_item);
      },
    },
  },
};
</script>

<style scoped>
</style>
