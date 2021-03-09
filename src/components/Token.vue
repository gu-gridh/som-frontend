<template>
  <div class="token">
    <AudioPlayer :filename="clip_file" />
    <span class="speaker">{{ clip_file.slice(0, 2) }}</span>
    <div class="text">
      <em>{{ som_tone }}</em>
    </div>
    <div v-if="Vowel_quality" class="vowel">
      <VowelQuality>{{ Vowel_quality }}</VowelQuality>
    </div>
  </div>
</template>

<script>
import AudioPlayer from "@/components/AudioPlayer.vue";
import VowelQuality from "@/components/VowelQuality.vue";

export default {
  components: { AudioPlayer, VowelQuality },
  props: ["som_tone", "clip_file", "Vowel_quality"],
};
</script>

<style lang="scss" scoped>
.token {
  display: flex;
  align-items: baseline;
  margin: 0 0 0.2em;
}
.speaker {
  font-size: smaller;
  margin: 0.1rem 0.4rem 0;
}
.text {
  flex: 1 50%;
  margin-right: 0.5rem;
}
.vowel {
  font-size: smaller;
}
</style>
