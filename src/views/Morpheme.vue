<template>
  <article>
    <div class="columns">
      <div>
        <div class="line-label">Morpheme</div>
        <h1>{{ morpheme }}</h1>
      </div>
      <div>
        <div class="line-label">Gloss</div>
        <h2>DER\N</h2>
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
          <Token
            v-for="token in type.tokens"
            :key="token.lpnr"
            v-bind="token"
          />
        </td>
      </tr>
    </table>
  </article>
</template>

<script>
import { getMorpheme } from "@/assets/db";
import Token from "@/components/Token";

export default {
  props: ["morpheme"],
  components: { Token },
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
        this.gloss = response.morpheme.gloss;
        this.vowQual = response.morpheme.vowQual;
        this.types = response.types;
      },
    },
  },
};
</script>

<style>
</style>
