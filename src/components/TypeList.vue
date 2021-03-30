<template>
  <table :class="{ 'no-tokens': noTokens }">
    <tr>
      <th>Type</th>
      <th>In English</th>
      <th v-if="!noTokens">Recordings</th>
    </tr>

    <tr
      v-for="{
        lpnr,
        gloss_item,
        en_trans,
        morphemes,
        tokens,
        highlight,
      } in types"
      :key="lpnr"
    >
      <td>
        <router-link :to="{ name: 'type', params: { typeId: lpnr } }">
          <template v-if="highlight && highlight.key === 'gloss_item'">
            <span
              v-html="utilHighlight(gloss_item, highlight.start, highlight.end)"
            />
          </template>
          <template v-else>{{ gloss_item }}</template>
        </router-link>
        <div v-if="morphemes" class="morphemes-row">
          <Morpheme
            v-for="(morpheme, i) in morphemes"
            :key="i"
            :morpheme="morpheme"
          />
        </div>
      </td>

      <td class="mute">
        <template v-if="highlight && highlight.key === 'en_trans'">
          <span
            v-html="utilHighlight(en_trans, highlight.start, highlight.end)"
          />
        </template>
        <template v-else>{{ en_trans }}</template>
      </td>

      <td v-if="!noTokens && tokens">
        <TokenList :tokens="tokens" :limit="2" />
      </td>
    </tr>
  </table>
</template>

<script>
import { highlight } from "@/assets/util";
import Morpheme from "@/components/Morpheme.vue";
import TokenList from "@/components/TokenList.vue";

export default {
  props: {
    types: Array,
    noTokens: Boolean,
  },
  components: { Morpheme, TokenList },
  methods: {
    utilHighlight: highlight,
  },
};
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed;
}

.morphemes-row {
  font-size: smaller;

  span:not(:last-of-type) {
    margin-right: 0.5em;
  }
}
</style>
