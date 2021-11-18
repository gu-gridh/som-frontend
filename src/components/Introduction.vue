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
    <TypeList v-if="type" :types="[type]" noTokens class="example" />

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
    <TokenList
      v-if="tokens && tokens.length"
      :tokens="tokens"
      :limit="2"
      class="example"
    />

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
    <TokenList
      v-if="vowelTokens.length"
      :tokens="vowelTokens"
      class="example"
    />
    <p>
      Vowel quality is also annotated for some morphemes, representing the
      proposed underlying vowel quality of that morpheme.
    </p>
    <MorphemeList
      v-if="vowelMorphemes.length"
      :morphemes="vowelMorphemes"
      class="example"
    />

    <h2>Somali vowel chart</h2>
    <figure class="vowel-chart">
      <img
        src="@/assets/somali-vowel-chart.png"
        alt="Vowel chart"
        class="vowel-chart"
      />
    </figure>

    <h2>References</h2>
    <References>
      <li>
        Kaldhol, Nina Hagen. 2017. The Oslo Dialect of Somali: Tonal adaptations
        of Norwegian loanwords. MA thesis. University of Oslo.
        <a href="http://urn.nb.no/URN:NBN:no-61048"
          >http://urn.nb.no/URN:NBN:no-61048</a
        >
      </li>
    </References>

    <h2>Glossing abbreviations</h2>
    <GlossingLegend />
  </article>
</template>

<script>
import TypeList from "@/components/TypeList.vue";
import TokenList from "@/components/TokenList.vue";
import VowelQuality from "@/components/VowelQuality.vue";
import MorphemeList from "@/components/MorphemeList.vue";
import GlossingLegend from "@/components/GlossingLegend.vue";
import References from "@/components/References.vue";
import { getType, search } from "@/assets/db";

export default {
  components: {
    TypeList,
    TokenList,
    VowelQuality,
    MorphemeList,
    GlossingLegend,
    References,
  },
  data: () => ({
    type: null,
    tokens: [],
    vowelTokens: [],
    vowelMorphemes: [],
  }),
  async created() {
    search("Maxay samaynaysaa hooyo?").then(
      (results) => (this.type = results.types[0])
    );

    getType(5903).then((type) => (this.tokens = type.tokens));

    getType(10839).then((type) => {
      this.vowelTokens = type.tokens.slice(-5);
      this.vowelMorphemes = type.morphemes;
    });
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
