<template>
  <div class="nav__links">
    <router-link class="nav__link" to="/">Главная</router-link>
    <router-link class="nav__link" to="/about">Сложность</router-link>
    <router-link class="nav__link" to="/custom">FAG</router-link>
    <router-link class="nav__link" to="/custom">О нас</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav__links {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.nav__link {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 143.1%;
  color: #000000;
  display: flex;
  gap: 16px;
  align-items: center;
  &::before {
    content: "";
    position: relative;
    height: 20px;
    width: 1px;
    background: rgba(0, 0, 0, 0.09);
    transform: matrix(-0.97, -0.26, -0.26, 0.97, 0, 0);
  }
  &.router-link-exact-active {
    color: #4182ec;
    &::before {
      background: rgba(65, 130, 236, 0.52);
    }
  }
}
</style>
