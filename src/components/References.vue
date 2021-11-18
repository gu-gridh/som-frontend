<template>
  <ul class="reference-list">
    <slot />
  </ul>
</template>

<style lang="scss">
.reference-list {
  padding-left: 0;
  li {
    list-style-type: none;
    text-indent: -1rem;
    padding-left: 1rem;
  }
}
</style>
