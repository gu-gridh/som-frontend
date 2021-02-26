<template>
  <div id="app">
    <h1><router-link to="/">Somali speech corpus</router-link></h1>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap&family=Enriqueta&display=optional");

* {
  box-sizing: border-box;
}

html {
  font-size: 20px;
}

#app {
  max-width: 800px;
  margin: auto;
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1 a,
h1 a:hover {
  text-decoration: inherit;
  color: inherit;
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
}

.help {
  margin-top: 0;
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
  vertical-align: top;
}

th,
.line-label {
  font-size: small;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.8;
  margin-bottom: 0;
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
