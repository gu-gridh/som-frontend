<template>
  <div id="app">
    <main class="container">
      <PageHeader />
      <Navigation />
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <PageFooter />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PageHeader from "@/components/PageHeader.vue";
import Navigation from "@/components/Navigation.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    Navigation,
    PageFooter,
  },
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
@use "@/assets/style.scss";
</style>
