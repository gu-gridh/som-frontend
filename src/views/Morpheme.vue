<template>
  <article>
    <div class="line-label">Morpheme</div>
    <h1>-ley</h1>
    <div class="line-label">Gloss</div>
    <h2>DER\N</h2>
    <div><strong>Vowel quality:</strong> H</div>
    <h3>Occurrences</h3>
    <p class="help">These are phrases where this morpheme occurs.</p>
    <table>
      <tr>
        <th>Phrase</th>
        <th>Translation</th>
        <th>Recordings</th>
      </tr>
      <tr v-for="type in types" :key="type.gloss_item">
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
          <div v-for="token in type.tokens" :key="token.lpnr">
            ⏯ <em>{{ token.som_tone }}</em>
          </div>
        </td>
      </tr>
    </table>
  </article>
</template>

<script>
import { getMorpheme } from "@/assets/db";

export default {
  props: ["morpheme"],
  data() {
    return {
      types: null,
    };
  },
  watch: {
    morpheme: {
      immediate: true,
      async handler() {
        const morpheme = await getMorpheme(this.morpheme);
        this.types = morpheme.types;
      },
    },
  },
};
</script>

<style>
</style>
