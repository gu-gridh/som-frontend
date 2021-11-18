<template>
  <article>
    <h2>About the Somali prosody database</h2>
    <p>
      The Somali prosody database makes available the data collected in the
      Swedish Vetenskapsrådet (VR) ÄR-HS project entitled, “<a
        href="https://www.gu.se/en/research/somali-and-prosodic-typology"
        >Somali and Prosodic Typology</a
      >.” Diarienummer 2015-01394. Project members included Laura J. Downing and
      Morgan Nilsson, both of the University of Gothenburg, and Maarten Mous,
      Leiden University. Yasuko Nagano-Madsen of the University of Gothenburg
      also participated in the project.
    </p>
    <p>
      The goal of the project was to document and analyze two understudied
      aspects of Somali prosody. First, it investigated the realization of tonal
      accent (e.g., a High tone) in phrases of different kinds, not just clauses
      but also phrases consisting of nouns followed by different types of
      modifiers. The interaction of intonation with lexical tone was also
      investigated. The results of this research are discussed in the following
      presentations and publications:
    </p>

    <References>
      <li>
        Laura J. Downing and Morgan Nilsson. 2016. Tone or Intonation? Phenomena
        at the Edges. Workshop on Somali Prosody. (convenors: Laura J. Downing,
        Maarten Mous & Morgan Nilsson), 46th Colloquium on African Languages and
        Linguistics, Leiden University, 29 August - 1 September 2016.
      </li>
      <li>
        Morgan Nilsson. 2017. Does tone mark case in Somali? 14th International
        Conference of Africanists, Russian Academy of Sciences, Moscow, 17-20
        October 2017.
      </li>
      <li>
        Morgan Nilsson. 2018. The need for phonological information in Somali
        dictionaries. 13th Congress of Somali Studies International Association,
        University of Hargeysa, 23-25 July 2018.
      </li>
      <li>
        Laura J. Downing and Morgan Nilsson. 2019. Prosodic restructuring in
        Somali nominals. In Samson Lotven, Silvina Bongiovanni, Phillip Weirich,
        Robert Botne & Samuel Gyasi Obeng (eds.),
        <em>
          African Linguistics across the Disciplines: Selected proceedings of
          ACAL48.
        </em>
        Berlin: Language Science Press, 125-142.
      </li>
      <li>
        Yasuko Nagano-Madsen, Laura J. Downing and Morgan Nilsson. 2019. Aspects
        of Somali Intonation. Workshop on Somali Grammar, University of
        Gothenburg, 3-4 October 2019.
      </li>
      <li>
        Yasuko Nagano-Madsen, Morgan Nilsson and Laura J. Downing. 2019.
        Phonetic studies of pitch-accent and intonation in Somali. Workshop on
        Studies in tone, intonation and syntax in African languages. Kyoto
        Sangyo University, Japan, 9 November 2019. [under review for publication
        in a peer-reviewed journal]
      </li>
      <li>
        Morgan Nilsson. Accepted. Somali. In Ronny Meyer, Bedilu Wakjira,
        Zelealem Leyew (eds.),
        <em>The Oxford Handbook of Ethiopian Languages.</em> Oxford: Oxford
        University Press.
      </li>
    </References>

    <p>
      Second, it investigated the realization of vowel harmony, which was
      claimed in earlier literature to extend beyond the grammatical word. Our
      phonetic study partially confirmed this, as discussed in the following
      papers:
    </p>

    <References>
      <li>
        Laura J. Downing. 2018. Is vowel harmony canonically (P)Word bound? An
        Africanist perspective on vowel harmony domains. Invited paper presented
        at the Phonology workshop on Long Distance Segmental Phenomena, GLOW41
        in Budapest, 10 April 2018.
      </li>
      <li>
        Laura J. Downing and Martin Krämer. Accepted. Phrasal harmony across
        word boundaries. In Harry van der Hulst and Nancy A. Ritter (eds.),
        <em>
          Oxford Handbook of Vowel Harmony.
        </em>
        Oxford University Press.
      </li>
      <li>
        Morgan Nilsson and Laura J. Downing. Accepted. Somali vowel harmony and
        vowel harmony domains.
        <em>
          Proceedings of NACAL 47. Sorbonne Paris Cité, 24-26 June 2019.
        </em>
      </li>
    </References>

    <p>
      The database reflects these research interests. High tone is
      systematically transcribed in the Somali data. Vowel harmony is
      transcribed for a portion of the data. Vowel harmony was found to be
      gradient, both within and across word boundaries, and the transcription
      system adopted aims to reflect the gradience.
    </p>
  </article>
</template>

<script>
import References from "@/components/References.vue";
export default {
  activated() {
    this.$store.commit("setTitle", "About");
  },
  components: { References },
};
</script>

<style></style>
