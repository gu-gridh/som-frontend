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
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&family=Source+Sans+Pro:wght@300;400&family=Red+Hat+Display:ital,wght@0,400;0,500;1,400&display=swap&family=Enriqueta&display=optional");

* {
  box-sizing: border-box;
}

html {
  font-size: 20px;
  /* Background pattern from https://www.heropatterns.com/ */
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='64' viewBox='0 0 16 32'%3E%3Cg fill='%23F9E170' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
}

#app {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  letter-spacing: 0.02em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 1rem;
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
}

h3,
h4,
h5,
h6 {
  margin-bottom: 0.2em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Enriqueta", sans-serif;
}

a,
a:hover {
  color: #4189dd;
  text-decoration: none;

  h1 & {
    text-decoration: inherit;
    color: inherit;
  }
}

.help {
  margin-top: 0;
}

.mute {
  opacity: 0.6;
}

table {
  width: 100%;
  margin: 1rem -0.5rem;
  border-spacing: 0.5rem 1rem;
}
th {
  text-align: left;
}
td {
  vertical-align: baseline;
}

th,
.line-label {
  font-size: small;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.8;
  margin-bottom: 0;
}

sup {
  line-height: 0;
}

.line-label + * {
  margin-top: 0;
}

.columns {
  display: flex;
  & > * {
    flex: 1;
  }
}
</style>
