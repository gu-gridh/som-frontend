<template>
  <article>
    <div class="columns">
      <div>
        <div class="line-label">Morpheme</div>
        <h1>
          <Morpheme :morpheme="morpheme" />
        </h1>
      </div>
      <div>
        <div class="line-label">Gloss</div>
        <h3 v-if="gloss">
          <Morpheme :morpheme="gloss" />
        </h3>
      </div>
    </div>
    <section v-if="vowQual">
      <div class="line-label">
        <InfoLabel>
          Vowel quality
          <template v-slot:info>
            <p>
              The inherent vowel quality of a morpheme is hypothesised as based
              on observations in speech.
            </p>
            <p>
              <VowelQuality>L</VowelQuality>: <em>light</em><br />
              <VowelQuality>M</VowelQuality>: <em>medium</em><br />
              <VowelQuality>H</VowelQuality>: <em>heavy</em>
            </p>
          </template>
        </InfoLabel>
      </div>
      <h3>
        <VowelQuality>{{ vowQual }}</VowelQuality>
      </h3>
    </section>
    <section v-if="types && types.length">
      <h3>Occurrences</h3>
      <TypeList :types="types" />
    </section>
  </article>
</template>

<script>
import { getMorpheme } from "@/assets/db";
import Morpheme from "@/components/Morpheme.vue";
import TypeList from "@/components/TypeList.vue";
import InfoLabel from "@/components/InfoLabel.vue";
import VowelQuality from "@/components/VowelQuality.vue";

export default {
  props: ["morpheme"],
  components: { Morpheme, TypeList, InfoLabel, VowelQuality },
  data() {
    return {
      gloss: null,
      vowQual: null,
      types: null,
    };
  },
  watch: {
    morpheme: {
      immediate: true,
      async handler() {
        const response = await getMorpheme(this.morpheme);
        this.gloss = response.morpheme.Gloss;
        this.vowQual = response.morpheme.VowQual;
        this.types = response.types;
        this.$store.commit("setTitle", this.morpheme);
      },
    },
  },
};
</script>

<style>
</style>
