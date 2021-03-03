<template>
  <div class="token">
    <AudioPlayer :filename="clip_file" />
    <span class="text">
      <em>{{ som_tone }}</em>
    </span>
  </div>
</template>

<script>
import AudioPlayer from "@/components/AudioPlayer.vue";

export default {
  components: { AudioPlayer },
  props: ["som_tone", "clip_file", "Vowel_quality"],
};
</script>

<style lang="scss" scoped>
.token {
  display: flex;
  align-items: center;
  margin: 0 0 0.2em;
}
.text {
  flex: 1;
  margin-left: 0.5rem;
}
</style>
