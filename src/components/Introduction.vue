<template>
  <article>
    <h2>Speakers</h2>
    <p>
      The database contains recorded speech from the following native Somali
      speakers:
    </p>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Speaker</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mf</td>
          <td>Mogadishu, female, ca 30 y.o.</td>
        </tr>
        <tr>
          <td>Mm</td>
          <td>Mogdishu, male, ca 30 y.o.</td>
        </tr>
        <tr>
          <td>Mn</td>
          <td>Mogadishu, male, ca 30 y.o.</td>
        </tr>
        <tr>
          <td>Mo</td>
          <td>Mogadishu, male, ca 30 y.o.</td>
        </tr>
        <tr>
          <td>Bm</td>
          <td>Beledweyne, male, ca 30 y.o.</td>
        </tr>
        <tr>
          <td>Jm</td>
          <td>Jigjiga, male, ca 30 y.o.</td>
        </tr>
        <tr>
          <td>Dm</td>
          <td>Djibouti, male, ca 30 y.o.</td>
        </tr>
        <tr>
          <td>Km</td>
          <td>Kismayo, male, ca 30 y.o.</td>
        </tr>
      </tbody>
    </table>

    <h2>Types</h2>
    <p>
      The recordings have been segmented into units, i.e., sentences, shorter
      phrases or single words. Each unique unit constitutes a
      <strong>type</strong>. Each type is rendered in standard Somali and
      supplied with an English translation and a morphological glossing. If you
      click on the type you will find a more detailed glossing followed by a
      list of recordings.
    </p>
    <TypeList :types="[type]" noTokens class="example" />

    <h2>Tokens</h2>
    <p>
      Most types have been recorded more than once, by one or several speakers.
      Each unique sound clip is a <strong>token</strong>. Each token has been
      transcribed using a broad transcription based on the standard orthography
      with additional acute accents on vowels to indicate high tone. For a brief
      introduction to Somali tone, see Kaldhol (<a
        href="http://urn.nb.no/URN:NBN:no-61048"
        >2017</a
      >: 31–43).
    </p>
    <TokenList :tokens="tokens" :limit="2" class="example" />

    <h2>Vowel quality</h2>
    <p>
      In a smaller part of the data, vowel quality has also been analysed and
      marked up for the distinction between <em>heavy</em> and
      <em>light</em> (±ATR) vowels. Consecutive syllables harmonise for this
      quality, so that a vowel may change depending on neighbouring vowels.
      Because the harmony effects may be gradient, we have transcribed three
      qualities (<VowelQuality>H</VowelQuality>, <VowelQuality>M</VowelQuality>,
      <VowelQuality>L</VowelQuality>) even though only two
      (<VowelQuality>H</VowelQuality>, <VowelQuality>L</VowelQuality>) are
      contrastive. For a brief introduction to Somali vowel quality, see Kaldhol
      (<a href="http://urn.nb.no/URN:NBN:no-61048">2017</a>: 25–27).
    </p>
    <p>
      <VowelQuality>L</VowelQuality>: <em>light (unmarked)</em><br />
      <VowelQuality>M</VowelQuality>: <em>medium</em><br />
      <VowelQuality>H</VowelQuality>: <em>heavy (marked)</em>
    </p>
    <TokenList :tokens="vowelTokens" class="example" />
    <p>
      Vowel quality is also annotated for some morphemes, representing the
      proposed underlying vowel quality of that morpheme.
    </p>
    <MorphemeList :morphemes="vowelMorphemes" class="example" />

    <h2>Somali vowel chart</h2>
    <figure class="vowel-chart">
      <img
        src="@/assets/somali-vowel-chart.png"
        alt="Vowel chart"
        class="vowel-chart"
      />
    </figure>

    <h2>References</h2>
    <ul class="reference-list">
      <li>
        Kaldhol, Nina Hagen. 2017.
        <em
          >The Oslo Dialect of Somali: Tonal adaptations of Norwegian
          loanwords</em
        >. MA thesis. University of Oslo.
        <a href="http://urn.nb.no/URN:NBN:no-61048"
          >http://urn.nb.no/URN:NBN:no-61048</a
        >
      </li>
    </ul>

    <h2>Glossing abbreviations</h2>
    <GlossingLegend />
  </article>
</template>

<script>
import TypeList from "@/components/TypeList.vue";
import TokenList from "@/components/TokenList.vue";
import VowelQuality from "@/components/VowelQuality.vue";
import MorphemeList from "@/components/MorphemeList.vue";
import GlossingLegend from "./GlossingLegend.vue";

export default {
  components: {
    TypeList,
    TokenList,
    VowelQuality,
    MorphemeList,
    GlossingLegend,
  },
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

.reference-list {
  padding-left: 0;
  li {
    list-style-type: none;
    text-indent: -1rem;
    padding-left: 1rem;
  }
}
</style>
