<template>
  <article>
    <h2>Introduction</h2>
    <p>
      The corpus consists of recorded speech from six native Somali speakers.
      The recordings have been segmented into sentences, shorter phrases or
      single words, or <strong>types</strong>.
    </p>
    <TypeList :types="[type]" noTokens class="example" />
    <p>
      Some types have been morphologically analyzed. This results in a sequence
      of <strong>morphemes</strong>: nouns, verbs, plural markers, etc.
    </p>
    <p>
      Most types have been recorded more than once, by the same or different
      speakers. Each recorded segment is a <strong>token</strong>. These are
      transcribed with non-standard orthography, adding accents to mark vowel
      tone.
    </p>
    <TokenList :tokens="tokens" :limit="2" class="example" />
    <h2>Vowel quality</h2>
    <p>
      This project primarily explores Somali vowels, which notably sport a
      distinction between <em>heavy</em> and <em>light</em>. Consecutive
      syllables harmonise in this quality, so that a vowel may change depending
      on neighbouring vowels.
    </p>
    <p>
      This quality is annotated for some tokens, describing an observation in
      the recording.
    </p>
    <p>
      <VowelQuality>L</VowelQuality>: <em>light</em><br />
      <VowelQuality>M</VowelQuality>: <em>medium</em><br />
      <VowelQuality>H</VowelQuality>: <em>heavy</em>
    </p>
    <TokenList :tokens="vowelTokens" class="example" />
    <p>
      It is also annotated for some morphemes, in which case it is a hypothesis
      about the inherent vowel quality of the morpheme.
    </p>
    <MorphemeList :morphemes="vowelMorphemes" class="example" />
  </article>
</template>

<script>
import TypeList from "@/components/TypeList.vue";
import TokenList from "@/components/TokenList.vue";
import VowelQuality from "@/components/VowelQuality.vue";
import MorphemeList from "@/components/MorphemeList.vue";

export default {
  components: { TypeList, TokenList, VowelQuality, MorphemeList },
  computed: {
    type() {
      return {
        lpnr: "5903",
        gloss_item: "Maxay samaynaysaa hooyo?",
        en_trans: "What is mother doing?",
        morphemes: [
          "maxay",
          "-Ø 6",
          "ay",
          "samee-",
          "-n",
          "-ay 1",
          "-t",
          "-aa 2",
          "hooy-",
          "-o",
        ],
      };
    },
    tokens() {
      return [
        {
          lpnr: "11582",
          clip_file: "Mo__3__77.wav",
          data_item: "Maxay samaynaysaa hooyo?",
          som_tone: "Maxáy samaýnaysaa hoóyo?",
          Vowel_quality: "",
        },
        {
          lpnr: "11583",
          clip_file: "Mo__3__78.wav",
          data_item: "Maxay samaynaysaa hooyo?",
          som_tone: "Maxáy samaýnaysaa hooyó?",
          Vowel_quality: "",
        },
        {
          lpnr: "11584",
          clip_file: "Mo__3__79.wav",
          data_item: "Maxay samaynaysaa hooyo?",
          som_tone: "Maxáy samaýnaysaa hooyó?",
          Vowel_quality: "",
        },
        {
          lpnr: "11588",
          clip_file: "Mo__3__83.wav",
          data_item: "Maxay samaynaysaa hooyo?",
          som_tone: "Maxáy samaýnaysaa hooyó?",
          Vowel_quality: "",
        },
        {
          lpnr: "11589",
          clip_file: "Mo__3__84.wav",
          data_item: "Maxay samaynaysaa hooyo?",
          som_tone: "Maxáy samaýnaysaá hooyó?",
          Vowel_quality: "",
        },
        {
          lpnr: "11593",
          clip_file: "Mo__3__88.wav",
          data_item: "Maxay samaynaysaa hooyo?",
          som_tone: "Maxáy samaýnaysaa hooy...?",
          Vowel_quality: "",
        },
        {
          lpnr: "11596",
          clip_file: "Mo__3__91.wav",
          data_item: "Maxay samaynaysaa hooyo?",
          som_tone: "Maxáy samaýnaysaa hoóyo?",
          Vowel_quality: "",
        },
        {
          lpnr: "11597",
          clip_file: "Mo__3__92.wav",
          data_item: "Maxay samaynaysaa hooyo?",
          som_tone: "Maxáy samaýnaysaa hooyó?",
          Vowel_quality: "",
        },
      ];
    },
    vowelTokens() {
      return [
        {
          lpnr: "19669",
          clip_file: "Km__16__721.wav",
          data_item: "wiilashaada",
          som_tone: "wiiláshaada",
          Vowel_quality: "H H HM L",
        },
        {
          lpnr: "19670",
          clip_file: "Km__16__722.wav",
          data_item: "wiilashaada",
          som_tone: "wiiláshaada",
          Vowel_quality: "H H HM M",
        },
        {
          lpnr: "19672",
          clip_file: "Km__16__724.wav",
          data_item: "wiilashaada",
          som_tone: "wiiláshaada",
          Vowel_quality: "H H HL L",
        },
        {
          lpnr: "19674",
          clip_file: "Km__16__726.wav",
          data_item: "wiilashaada",
          som_tone: "wiiláshaada",
          Vowel_quality: "H",
        },
      ];
    },
    vowelMorphemes() {
      return [
        { Morpheme: "wiil", Gloss: "boyM", VowQual: "H" },
        { Morpheme: "-aC", Gloss: "PL", VowQual: "L > H" },
        { Morpheme: "-taa", Gloss: "POSS.2.SG", VowQual: "L > H" },
        { Morpheme: "-ta", Gloss: "DEF", VowQual: "L > H" },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.example {
  margin-top: 2rem 0;
  @media screen and (min-width: 600px) {
    margin: 2rem auto;
    width: 80%;
  }
}
</style>
