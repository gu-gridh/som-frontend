<template>
  <nav v-if="prev">
    <a :href="prev.route.path" class="back" @click.prevent="goBack">
      <font-awesome-icon :icon="['fas', 'arrow-left']" size="xs" />&nbsp;
      <Morpheme v-if="prev.route.name === 'morpheme'" :morpheme="prev.title" />
      <template v-else>
        {{ prevTitle }}
      </template>
    </a>
  </nav>
</template>

<script>
import Morpheme from "@/components/Morpheme.vue";

export default {
  components: { Morpheme },
  computed: {
    prev() {
      return this.$store.state.history[this.$store.state.history.length - 2];
    },
    prevTitle() {
      return (
        this.prev.title || (this.prev.route.path === "/" ? "Home" : "Back")
      );
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
nav {
  margin: 1rem 0;
  font-size: smaller;
}
</style>
