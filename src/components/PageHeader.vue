<template>
  <header class="page-header">
    <h1><router-link to="/">Somali speech corpus</router-link></h1>
    <router-link to="/about">About</router-link>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: baseline;
  border-bottom: thin solid #aaa;
  margin-bottom: 1rem;
}

h1 {
  flex: 1;
  margin-top: 0;
}
</style>
