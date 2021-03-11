<template>
  <div class="info-label">
    <slot />
    <font-awesome-icon
      v-if="!disabled"
      :icon="['fas', 'question-circle']"
      class="icon"
      @click="toggle"
    />
    <div v-show="expanded" class="info"><slot name="info" /></div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    info: String,
    disabled: Boolean,
  },
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

<style lang="scss" scoped>
.icon {
  font-size: 0.8rem;
  /* color: #4189dd; */
  display: inline-block;
  margin-left: 0.2em;
  cursor: pointer;
}

.info {
  margin: 0.2em 0;
  padding: 0.5em;
  padding-left: 1em;
  background-image: url("../assets/zig.svg");
  background-repeat: repeat-y;
  background-size: 0.5em;
  text-transform: none;
  font-weight: normal;
  font-size: 0.8rem;

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
}
</style>
