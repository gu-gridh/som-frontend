<template>
  <div id="app">
    <h1><router-link to="/">Somali speech corpus</router-link></h1>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background: #f8f5f5;
}
#app {
  width: 800px;
  margin: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

.help {
  margin-top: 0;
}

table {
  width: 100%;
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
</style>
