<template>
  <div>
    <h2>Search</h2>
    <input type="search" v-model="input" @keyup="search" />
    <div v-if="results">
      <h3>Results</h3>
      <table>
        <tr v-for="{ lpnr, gloss_item, en_trans } in results" :key="lpnr">
          <td>
            <router-link :to="{ name: 'type', params: { typeId: lpnr } }">
              {{ gloss_item }}
            </router-link>
          </td>
          <td>
            <router-link :to="{ name: 'type', params: { typeId: lpnr } }">
              {{ en_trans }}
            </router-link>
          </td>
          <td>⏯</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { search } from "@/assets/db";

export default {
  name: "home",
  data() {
    return {
      input: "",
      results: null,
    };
  },
  methods: {
    async search() {
      const results = await search(this.input);
      this.results = results.types;
    },
  },
};
</script>

<style scoped>
input {
  font-size: 150%;
  width: 100%;
}
</style>
