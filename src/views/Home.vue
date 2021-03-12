<template>
  <div>
    <p>
      The Somali speech corpus contains recordings, transcriptions,
      translations, morpheme analysis and phonological analysis of 22 000 spoken
      phrases of Somali.
    </p>
    <div class="search-bar">
      <font-awesome-icon :icon="['fas', 'search']" />
      <input type="search" v-model="input" spellcheck="false" />
    </div>

    <Introduction v-if="!input" />

    <div v-if="results.morphemes.length">
      <h3>Morphemes</h3>
      <MorphemeList
        :morphemes="
          expand.morphemes ? results.morphemes : results.morphemes.slice(0, 8)
        "
      />
      <div
        v-if="results.morphemes.length - 8 > 0"
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
      <TypeList
        :types="expand.types ? results.types : results.types.slice(0, 8)"
        noTokens
      />
      <div
        v-if="results.types.length - 8 > 0"
        class="expand"
        @click="toggleExpandTypes"
      >
        <template v-if="!expand.types">
          + {{ results.types.length - 8 }} more
        </template>
        <template v-else>- show less</template>
      </div>
    </div>

    <div
      v-if="input && !results.types.length && !results.morphemes.length"
      class="no-results"
    >
      <em>No results</em>
    </div>
  </div>
</template>

<script>
import { search } from "@/assets/db";
import Introduction from "@/components/Introduction.vue";
import MorphemeList from "@/components/MorphemeList.vue";
import TypeList from "@/components/TypeList.vue";

export default {
  name: "home",
  components: { Introduction, MorphemeList, TypeList },
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
      window.history.replaceState(null, null, "#" + this.input);
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
  activated() {
    this.$store.commit("setTitle", "");
    // Copy #hash to search input.
    if (window.location.hash.slice(1)) {
      this.input = decodeURIComponent(window.location.hash.slice(1));
    }
  },
  watch: {
    // Perform search when the input is changed.
    input() {
      this.search();
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
.expand {
  font-size: smaller;
  cursor: pointer;
}
.no-results {
  margin: 2rem 0;
}
</style>
