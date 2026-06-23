<template>
  <footer class="site-footer">
    <nav class="footer-links" aria-label="Footer">
      <div class="links-stack">
        <router-link to="/about">About the project</router-link>
        <a href="https://www.gu.se/en/research/somali-and-prosodic-typology" target="_blank" rel="noopener">
          Somali and Prosodic Typology
        </a>
      </div>
      <div class="links-stack border-stack">
        <a href="https://github.com/gu-gridh/som-frontend" target="_blank" rel="noopener">
          GitHub repository and development
        </a>
        <a href="https://dh.gu.se/" target="_blank" rel="noopener">
          Gothenburg Research Infrastructure
        </a>
      </div>
    </nav>
    <a href="https://dh.gu.se/" class="logo-link" target="_blank" rel="noopener"
      aria-label="University of Gothenburg GRIDH">
      <CdhLogo />
    </a>
  </footer>
</template>

<script>
import CdhLogo from "./CdhLogo.vue";

export default {
  name: "PageFooter",
  components: {
    CdhLogo,
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  color: #fff;
  background: #222;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  font-weight: 300;

  @media screen and (min-width: 800px) {
    position: fixed;
    z-index: 20;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2rem;
  }
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    font-weight: 300;
    line-height: 1.2;

    &:visited {
      color: #fff;
    }

    &:hover {
      color: #fff;
      opacity: 0.8;
    }

    &::before {
      content: "";
      flex: 0 0 18px;
      width: 18px;
      height: 18px;
      background: url("https://data.dh.gu.se/ui-icons/arrow_link_white_circle.png") center / 18px no-repeat;
    }
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    gap: 0;
  }
}

.links-stack {
  display: grid;
  gap: 0.2rem;
  padding-right: 1.25rem;
}

.border-stack {
  @media screen and (min-width: 700px) {
    padding-right: 0;
    padding-left: 1.25rem;
    border-left: 0.5px dashed #fff;
  }
}

.logo-link {
  flex: 0 0 auto;
  color: #fff;
}
</style>
