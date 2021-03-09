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
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap&family=Enriqueta&display=optional");

* {
  box-sizing: border-box;
}

html {
  font-size: 20px;
  background-color: #ffffff;
  background-image: url("assets/diamonds.svg");
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
