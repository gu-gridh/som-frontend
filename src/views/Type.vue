<template>
  <article>
    <div class="line-label">Phrase</div>
    <h1>Aad ayuu u fiican yahay</h1>
    <div class="line-label">Translation</div>
    <h2>It is very good.</h2>
    <h3>Gloss</h3>
    <p class="help">This phrase consists of the following morphemes.</p>
    <table>
      <tr>
        <th>Morpheme</th>
        <th>Gloss</th>
        <th>Vowel quality</th>
      </tr>
      <tr v-for="([morpheme, gloss, vow], i) in morphemes" :key="i">
        <td>
          <router-link :to="{ name: 'morpheme', params: { morphemeId: 1 } }">
            {{ morpheme }}
          </router-link>
        </td>
        <td>
          <router-link :to="{ name: 'morpheme', params: { morphemeId: 1 } }">
            {{ gloss }}
          </router-link>
        </td>
        <td>{{ vow || "" }}</td>
      </tr>
    </table>

    <h3>Recordings</h3>
    <div>⏯ <em>Aad ayuu u fiican yahay</em></div>
    <div>⏯ <em>Aad ayuu u fiican yahay.</em></div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      morphemes: [
        ["aad 2", "large degree\\M", "H"],
        ["ayaa", "FOC"],
        ["uu", "PRO.SBJ.3M", "L"],
        ["u", "PREP.VEN", "L"],
        ["fiicn-", "fine, nice\\ADJ"],
        ["y-", "3.SG.M / 3.PL"],
        ["ah", "be\\V"],
        ["-ay 3", "PRS"],
      ],
    };
  },
};
</script>

<style>
</style>
