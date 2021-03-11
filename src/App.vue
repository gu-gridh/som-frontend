<template>
  <div id="app">
    <div class="container">
      <PageHeader />
      <Navigation />
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import Navigation from "@/components/Navigation.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { PageHeader, Navigation },
  computed: {
    ...mapState(["title", "history"]),
    appTitle: () => "Somali speech corpus",
  },
  watch: {
    title() {
      document.title = this.title
        ? `${this.title} – ${this.appTitle}`
        : this.appTitle;
    },
    $route: {
      immediate: true,
      handler(to) {
        this.$store.commit("recordHistory", to);
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>
