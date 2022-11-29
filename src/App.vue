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
  <div class="page">
    <router-view />
  </div>
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
body {
  overflow-x: hidden;
  background: linear-gradient(
    179.87deg,
    #e6eaf0 1.02%,
    #e6eaf1 4.79%,
    #e7ebf1 8.76%,
    #eaeef4 14.75%,
    #e8ecf2 19.07%
  );
}
.all-link {
  width: 100%;
  height: 100%;
  padding: 14px 40px;
  display: block;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.page {
  flex: 1 1 auto;
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
  width: 100%;
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
  transition: all 0.3s ease 0s;
  @media (any-hover: hover) {
    &:hover {
      background: rgba(194, 213, 242);
    }
  }
}
</style>
