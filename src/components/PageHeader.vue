<template>
  <header class="page-header">
    <h1><router-link to="/">Somali speech corpus</router-link></h1>
    <nav>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style lang="scss" scoped>
header {
  @media screen and (min-width: 600px) {
    display: flex;
    align-items: baseline;
  }
  border-bottom: thin solid #aaa;
  margin-bottom: 1rem;
}

h1 {
  flex: 1;
  margin-top: 0;
  line-height: 1;
  // margin-bottom: 0;
}

nav {
  margin-bottom: 1rem;

  > * {
    display: block;

    @media screen and (min-width: 600px) {
      display: inline-block;

      &:not(:first-child) {
        margin-left: 1em;
      }
    }
  }
}
</style>
