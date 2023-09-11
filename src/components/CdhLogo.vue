<template>
  <div class="cdh-logo">
    GRIDH<span class="colon">:</span>
    <div>
      Gothenburg<br />
      Research Infrastructure<br />
      in Digital Humanities
    </div>
  </div>
</template>

<script>
import "typeface-barlow-condensed";
import "typeface-clicker-script";
export default {};
</script>

<style scoped>
.cdh-logo {
  text-align: left;
  font-weight: 100;
  font-style: normal;
  font-size: 50px;
  line-height: 0.8;
  font-family: "Barlow Condensed", sans-serif;
}

.colon {
  font-size: 84%;
}

.cdh-logo > div {
  font-size: 70%;
  margin-top: 0.05em;
  line-height: 0.85;
}
</style>
