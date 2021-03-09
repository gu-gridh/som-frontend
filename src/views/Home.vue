<template>
  <div>
    <p>
      The Somali speech corpus contains recordings, transcriptions,
      translations, morpheme analysis and phonological analysis of 22 000 spoken
      phrases of Somali.
    </p>
    <div class="search-bar">
      <font-awesome-icon :icon="['fas', 'search']" />
      <input type="search" v-model="input" spellcheck="false" @input="search" />
    </div>

    <div v-if="results.morphemes.length">
      <h3>Morphemes</h3>
      <table>
        <tr>
          <th>Morpheme</th>
          <th>Gloss</th>
          <th>Vowel quality</th>
        </tr>
        <tr
          v-for="{ Morpheme, Gloss, VowQual } in expand.morphemes
            ? results.morphemes
            : results.morphemes.slice(0, 8)"
          :key="Morpheme"
        >
          <td>
            <router-link
              :to="{ name: 'morpheme', params: { morpheme: Morpheme } }"
            >
              <Morpheme :morpheme="Morpheme" />
            </router-link>
          </td>
          <td class="mute">
            <Morpheme :morpheme="Gloss" />
          </td>
          <td>
            <VowelQuality>{{ VowQual }}</VowelQuality>
          </td>
        </tr>
      </table>
      <div
        v-if="results.morphemes.length - 8"
        class="expand"
        @click="toggleExpandMorphemes"
      >
        <template v-if="!expand.morphemes">
          + {{ results.morphemes.length - 8 }} more
        </template>
        <template v-else>- show less</template>
      </div>
    </div>

    <div v-if="results.types.length">
      <h3>Types</h3>
      <table>
        <tr>
          <th>Type</th>
          <th>In English</th>
        </tr>
        <tr
          v-for="{ lpnr, gloss_item, en_trans, morphemes } in expand.types
            ? results.types
            : results.types.slice(0, 8)"
          :key="lpnr"
        >
          <td>
            <router-link :to="{ name: 'type', params: { typeId: lpnr } }">
              {{ gloss_item }}
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
            {{ en_trans }}
          </td>
        </tr>
      </table>
      <div
        v-if="results.types.length - 8"
        class="expand"
        @click="toggleExpandTypes"
      >
        <template v-if="!expand.types">
          + {{ results.types.length - 8 }} more
        </template>
        <template v-else>- show less</template>
      </div>
    </div>

    <div v-if="!results.types.length && !results.morphemes.length">
      <em>No results</em>
    </div>
  </div>
</template>

<script>
import { search } from "@/assets/db";
import Morpheme from "@/components/Morpheme.vue";
import VowelQuality from "@/components/VowelQuality.vue";

export default {
  name: "home",
  components: { Morpheme, VowelQuality },
  data() {
    return {
      input: "",
      results: {
        morphemes: [],
        types: [],
      },
    };
  },
  computed: {
    expand() {
      return this.$store.state.search.expand;
    },
  },
  methods: {
    async search() {
      if (!this.input) {
        this.results = { morphemes: [], types: [] };
        return;
      }
      this.results = await search(this.input);
    },
    toggleExpandMorphemes() {
      this.$store.commit("toggleSearchExpand", {
        morphemes: !this.expand.morphemes,
      });
    },
    toggleExpandTypes() {
      this.$store.commit("toggleSearchExpand", { types: !this.expand.types });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
}
.fa-search {
  margin: 0.5rem 0.5rem 0.5rem 0;
}
input {
  flex: 1;
  font-size: 1.5rem;
  width: 100%;
}
.morphemes-row {
  font-size: smaller;
  span:not(:last-of-type) {
    margin-right: 0.5em;
  }
}
.expand {
  font-size: smaller;
  cursor: pointer;
}
</style>
