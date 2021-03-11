<template>
  <table>
    <tr>
      <th>Morpheme</th>
      <th>Gloss</th>
      <th>
        <InfoLabel>
          Vowel quality
          <template v-slot:info>
            <div><VowelQuality>L</VowelQuality>: <em>light</em></div>
            <div><VowelQuality>H</VowelQuality>: <em>heavy</em></div>
          </template>
        </InfoLabel>
      </th>
    </tr>

    <tr
      v-for="{ Morpheme, Gloss, VowQual, highlight } in morphemes"
      :key="Morpheme"
    >
      <td>
        <router-link :to="{ name: 'morpheme', params: { morpheme: Morpheme } }">
          <Morpheme
            :morpheme="Morpheme"
            :highlight="highlight && highlight.key === 'Morpheme' && highlight"
          />
        </router-link>
      </td>

      <td class="mute">
        <Morpheme
          :morpheme="Gloss"
          :highlight="highlight && highlight.key === 'Gloss' && highlight"
        />
      </td>

      <td>
        <VowelQuality>{{ VowQual }}</VowelQuality>
      </td>
    </tr>
  </table>
</template>

<script>
import Morpheme from "@/components/Morpheme.vue";
import VowelQuality from "@/components/VowelQuality.vue";
import InfoLabel from "@/components/InfoLabel.vue";

export default {
  props: {
    morphemes: Array,
  },
  components: { Morpheme, VowelQuality, InfoLabel },
};
</script>

<style scoped>
th:first-child {
  width: 40%;
}
th:nth-child(2) {
  width: 40%;
}
th:nth-child(3) {
  width: 20%;
}
</style>
