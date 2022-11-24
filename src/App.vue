<template>
  <nav class="nav__container">
    <img
      class="nav__logo"
      src="@/assets/img/logo_high_quality.png"
      alt="logo"
    />
    <nav-links />
    <a href="#" class="nav__button">Личный кабинет</a>
  </nav>
  <router-view />
</template>

<script>
import NavLinks from "@/components/NavLinks.vue";

export default {
  components: {
    NavLinks,
  },
};
</script>

<style lang="scss">
#app {
}
.nav__logo {
  max-width: 170px;
}
nav {
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav__button {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 143.1%;
  color: #3f7bdd;
  background: rgba(194, 213, 242, 0.61);
  border-radius: 5px;
  padding: 11px 36px;
  white-space: nowrap;
}
</style>
