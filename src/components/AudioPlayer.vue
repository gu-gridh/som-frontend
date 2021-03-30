<template>
  <span class="audio-player" :class="{ started, playing }" @mouseenter="load">
    <font-awesome-icon
      :icon="['far', playing ? 'pause-circle' : 'play-circle']"
      class="icon playback"
      @click="togglePlay"
    />
    <a :href="this.urlDownload" class="a-inherit" download>
      <font-awesome-icon
        :icon="['fas', 'download']"
        class="icon download"
        size="xs"
    /></a>
  </span>
</template>

<script>
export default {
  props: ["filename"],
  data() {
    return {
      sound: null,
      started: false,
    };
  },
  computed: {
    url() {
      return `https://data.dh.gu.se/som/sound/${this.filename}`;
    },
    urlDownload() {
      // Special server configuration required to serve this as application/octet-stream
      return this.url + "?dl";
    },
    playing() {
      return this.sound && this.sound.playing();
    },
  },
  methods: {
    async load(force = false) {
      if (this.sound && !force) return;

      // Load 3d-party library dynamically
      // See: https://webpack.js.org/guides/code-splitting/#dynamic-imports
      const { Howl } = await import(/* webpackChunkName: "howler" */ "howler");
      this.sound = new Howl({
        src: [this.url],
        onend: () => {
          this.started = false;
        },
      });
    },
    togglePlay() {
      this.playing ? this.pause() : this.play();
    },
    play() {
      this.started = true;
      this.sound.play();

      // Store the new id.
      this.$store.commit("playingSoundId", this.filename);
    },
    pause() {
      this.sound.pause();
    },
  },
  watch: {
    "$store.state.currentSound"(name) {
      if (this.playing && name !== this.filename) {
        this.sound.stop();
        this.started = false;
      }
    },
    filename() {
      // Reload sound if filename changes.
      this.load(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  opacity: 0.7;
  transition: all 200ms;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

.playback.started {
  color: #dd408a;
}

.download {
  margin: 2.5px;
}
</style>
