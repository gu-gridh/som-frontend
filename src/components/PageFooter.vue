<template>
  <footer>
    <a href="https://dh.gu.se/">
      <CdhLogo />
    </a>
  </footer>
</template>

<script>
import CdhLogo from "./CdhLogo.vue";

export default {
  name: "PageFooter",
  components: {
    CdhLogo,
  },
};
</script>

<style lang="scss" scoped>
footer {
  @media screen and (min-width: 600px) {
    display: flex;
    align-items: baseline;
    justify-content: end;
  }
  border-top: thin solid #aaa;
  margin-top: 2rem;
  padding-top: 2rem;
}
</style>
