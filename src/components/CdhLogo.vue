<template>
  <div class="cdh-logo" aria-hidden="true">
    <span>GU</span>
    <span class="divider"></span>
    <span>GRIDH</span>
  </div>
</template>

<script>
import "typeface-barlow-condensed";
export default {};
</script>

<style scoped>
.cdh-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  white-space: nowrap;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1;
  font-family: "Barlow Condensed", sans-serif;
}

.divider {
  width: 1px;
  height: 1.5rem;
  background: currentColor;
  opacity: 0.7;
}
</style>
