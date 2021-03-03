<template>
  <div class="token">
    <font-awesome-icon
      :icon="['far', playing ? 'pause-circle' : 'play-circle']"
      class="icon"
      :class="{ playing }"
      @click="togglePlay"
    />
    <span class="text">
      <em>{{ som_tone }}</em>
    </span>
  </div>
</template>

<script>
export default {
  props: ["som_tone", "clip_file", "Vowel_quality"],
  data() {
    return {
      playing: false,
    };
  },
  methods: {
    togglePlay() {
      this.playing = !this.playing;
      if (this.playing) {
        setTimeout(() => (this.playing = false), 2000);
      }
    },
  },
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
.icon {
  opacity: 0.5;
  transition: opacity 200ms;
  &:hover,
  &.playing {
    opacity: 1;
  }
}
</style>
