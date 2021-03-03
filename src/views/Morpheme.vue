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
        <h2>{{ gloss }}</h2>
      </div>
    </div>
    <div><strong>Vowel quality:</strong> H</div>
    <h3>Occurrences</h3>
    <p class="help">These are phrases where this morpheme occurs.</p>
    <table>
      <tr>
        <th>Phrase</th>
        <th>In English</th>
        <th>Recordings</th>
      </tr>
      <tr v-for="type in types" :key="type.lpnr">
        <td>
          <router-link :to="{ name: 'type', params: { typeId: type.lpnr } }">
            {{ type.gloss_item }}
          </router-link>
        </td>
        <td>
          <router-link :to="{ name: 'type', params: { typeId: type.lpnr } }">
            {{ type.en_trans }}
          </router-link>
        </td>
        <td>
          <TokenList :tokens="type.tokens" :limit="2" />
        </td>
      </tr>
    </table>
  </article>
</template>

<script>
import { getMorpheme } from "@/assets/db";
import Morpheme from "@/components/Morpheme";
import TokenList from "@/components/TokenList";

export default {
  props: ["morpheme"],
  components: { Morpheme, TokenList },
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
      },
    },
  },
};
</script>

<style>
</style>
