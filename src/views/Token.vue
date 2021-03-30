<template>
  <article v-if="clip_file">
    <div class="line-label">Token</div>
    <h1>
      <em>{{ som_tone }}</em>
    </h1>

    <div class="columns">
      <div>
        <div class="line-label">Recording</div>
        <AudioPlayer :filename="clip_file" />
      </div>
      <div>
        <div class="line-label">Speaker</div>
        {{ clip_file.split("__")[0] }}
      </div>
    </div>
    <section>
      <TypeList :types="[type]" no-tokens />
    </section>
  </article>
</template>

<script>
import { getToken } from "@/assets/db";
import AudioPlayer from "@/components/AudioPlayer.vue";
import TypeList from "@/components/TypeList.vue";

export default {
  props: ["tokenId"],
  components: { AudioPlayer, TypeList },
  data() {
    return {
      clip_file: null,
      som_tone: null,
      Vowel_quality: null,
      type: null,
    };
  },
  watch: {
    tokenId: {
      immediate: true,
      async handler() {
        const { token, type } = await getToken(this.tokenId);
        this.clip_file = token.clip_file;
        this.som_tone = token.som_tone;
        this.Vowel_quality = token.Vowel_quality;
        this.type = type;
      },
    },
  },
};
</script>

<style>
</style>
