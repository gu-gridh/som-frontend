<template>
  <span class="morpheme" v-html="html" />
</template>

<script>
export default {
  props: {
    morpheme: { type: String, required: true },
  },
  computed: {
    html() {
      return this.morpheme
        .replace(/ (\d+)$/, "<sup>$1</sup>")
        .replace(/([A-Z]+)(?![a-z])/g, "<em>$1</em>");
    },
  },
};
</script>

<style>
.morpheme {
}
</style>
