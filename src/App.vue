<template>
  <div id="app">
    <div class="container">
      <PageHeader></PageHeader>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "App",
  components: { PageHeader },
};
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>
