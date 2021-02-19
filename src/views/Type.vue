<template>
  <article>
    <div class="line-label">Phrase</div>
    <h1>{{ gloss_item }}</h1>
    <div class="line-label">Translation</div>
    <h2>{{ en_trans }}</h2>
    <h3>Gloss</h3>
    <p class="help">This phrase consists of the following morphemes.</p>
    <table>
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
            {{ Morpheme }}
          </router-link>
        </td>
        <td>
          <router-link
            :to="{
              name: 'morpheme',
              params: { morpheme: Morpheme },
            }"
          >
            {{ Gloss }}
          </router-link>
        </td>
        <td>{{ VowQual }}</td>
      </tr>
    </table>

    <h3>Recordings</h3>
    <div>⏯ <em>Aad ayuu u fiican yahay</em></div>
    <div>⏯ <em>Aad ayuu u fiican yahay.</em></div>
  </article>
</template>

<script>
import { getType } from "@/assets/db";

export default {
  props: ["typeId"],
  data() {
    return {
      gloss_item: null,
      en_trans: null,
      morphemes: null,
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
      },
    },
  },
};
</script>

<style>
</style>
