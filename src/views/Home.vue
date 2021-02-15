<template>
  <div>
    <h2>Search</h2>
    <input type="search" v-model="input" @keyup="search" />
    <div v-if="results">
      <h3>Results</h3>
      <table>
        <tr v-for="{ typeId, phrase, translation } in results" :key="typeId">
          <td>
            <router-link :to="{ name: 'type', params: { typeId } }">
              {{ phrase }}
            </router-link>
          </td>
          <td>
            <router-link :to="{ name: 'type', params: { typeId } }">
              {{ translation }}
            </router-link>
          </td>
          <td>⏯</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      input: "",
      types: [
        {
          typeId: 1,
          phrase: "Aad ayuu u fiican yahay.",
          translation: "It is very good.",
        },
        {
          typeId: 2,
          phrase: "Buugga ay Maryan i siisay aad",
          translation: "The book that Maryan gave to me is very good",
        },
        {
          typeId: 3,
          phrase: "Waxa anaa qaatay.",
          translation: "I took the things.",
        },
        {
          typeId: 4,
          phrase: "Kuwani ma kooraa?",
          translation: "Are these cattle bells?",
        },
      ],
      results: null,
    };
  },
  methods: {
    search() {
      this.results = this.types.filter(
        ({ phrase, translation }) =>
          phrase.toLowerCase().includes(this.input.toLowerCase()) ||
          translation.toLowerCase().includes(this.input.toLowerCase())
      );
    },
  },
  created() {
    this.search();
  },
};
</script>

<style scoped>
input {
  font-size: 150%;
  width: 100%;
}
</style>
