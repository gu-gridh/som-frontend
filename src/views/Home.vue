<template>
  <div>
    <div class="search-bar">
      <font-awesome-icon :icon="['fas', 'search']" />
      <input type="search" v-model="input" spellcheck="false" @input="search" />
    </div>
    <div v-if="results.length">
      <table>
        <tr>
          <th>Phrase</th>
          <th>Translation</th>
        </tr>
        <tr
          v-for="{ lpnr, gloss_item, en_trans, morphemes } in results"
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
          <td>
            <router-link :to="{ name: 'type', params: { typeId: lpnr } }">
              {{ en_trans }}
            </router-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { search } from "@/assets/db";
import Morpheme from "@/components/Morpheme";

export default {
  name: "home",
  components: { Morpheme },
  data() {
    return {
      input: "",
      results: [],
    };
  },
  methods: {
    async search() {
      if (!this.input) {
        this.results = [];
        return;
      }
      const results = await search(this.input);
      this.results = results.types;
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
table {
  margin-top: 0;
}
th {
  width: 50%;
}
.morphemes-row {
  font-size: smaller;
  span:not(:last-of-type) {
    margin-right: 0.5em;
  }
}
</style>
