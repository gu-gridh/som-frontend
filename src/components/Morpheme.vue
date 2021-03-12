<template>
  <span class="morpheme" v-html="html" />
</template>

<script>
import { highlight } from "@/assets/util";

export default {
  props: {
    morpheme: { type: String, required: true },
    highlight: { type: [Object, Boolean], required: false },
  },
  computed: {
    html() {
      return (
        (this.highlight
          ? highlight(this.morpheme, this.highlight.start, this.highlight.end)
          : this.morpheme
        )
          // Superscript numbers.
          .replace(/ (\d+)$/, "<sup>$1</sup>")
          // Italicize capitals unless preceding lowercase.
          .replace(/([A-Z]+)(?![a-z])/g, "<em>$1</em>")
          // Italicize capitals following a dash.
          .replace(/(?<=-)([A-Z]+)/g, "<em>$1</em>")
      );
    },
  },
};
</script>

<style>
</style>
