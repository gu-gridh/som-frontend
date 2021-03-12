<template>
  <div>
    <Token
      v-for="token in expanded ? tokens : tokens.slice(0, limit)"
      :key="token.lpnr"
      v-bind="token"
    />
    <div v-if="tokens.length > limit">
      <small class="clickable" @click="toggle">
        <template v-if="!expanded">+ {{ tokens.length - limit }} more</template>
        <template v-else>- show less</template>
      </small>
    </div>
  </div>
</template>

<script>
import Token from "@/components/Token";

export default {
  name: "TokenList",
  components: { Token },
  props: ["tokens", "limit"],
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style>
.clickable {
  cursor: pointer;
}
</style>
