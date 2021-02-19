<template>
  <div>
    ⏯ <em>{{ som_tone }}</em> ({{ clip_file.slice(0, 2) }})
    {{ Vowel_quality }}
  </div>
</template>

<script>
export default {
  props: ["som_tone", "clip_file", "Vowel_quality"],
};
</script>

<style>
</style>
