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
import { Howl } from "howler";

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
    load() {
      if (this.sound) return;
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
