<template>
  <footer>
    <a href="https://dh.gu.se/" class="logo-link">
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
    justify-content: flex-end;
  }
  border-top: thin solid #aaa;
  margin-top: 2rem;
  padding-top: 2rem;
}

.logo-link {
  color: inherit;
}
</style>
