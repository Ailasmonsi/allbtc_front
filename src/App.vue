<template>
  <nav class="nav__container">
    <img
      class="nav__logo"
      src="@/assets/img/logo_high_quality.png"
      alt="logo"
    />
    <nav-links v-if="viewportWidth >= 767.98" />
    <a v-if="viewportWidth >= 991.98" href="#" class="nav__button">
      Личный кабинет
    </a>
    <div v-else class="nav__buttons_mobile">
      <a class="nav__button_mobile" href="#"
        ><img src="./assets/img/user.svg" alt="" />
      </a>
      <div v-if="viewportWidth < 767.98" class="nav__burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
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
  data() {
    return {
      viewportWidth: 0,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.viewportWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
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
.page {
  flex: 1 1 auto;
}
.nav__logo {
  max-width: 170px;
  @media (max-width: 767.98px) {
    max-width: 138px;
  }
}
nav {
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 100%;
  box-sizing: border-box !important;
  margin: 15px auto !important;
  @media (max-width: 991.98px) {
    padding-top: 0;
  }
  @media (max-width: 767.98px) {
    gap: 15px;
  }
}
.nav__buttons_mobile {
  display: flex;
  align-items: center;
  gap: 10px;
  & .nav__burger {
    background: #4182ec;
    border-radius: 5px;
    width: 60px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4px;
    & span {
      display: flex;
      width: 18px;
      height: 1.5px;
      flex: 0 0 1.5px;
      background-color: #fff;
      border-radius: 5px;
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
  transition: all 0.3s ease 0s;
  @media (any-hover: hover) {
    &:hover {
      background: rgba(194, 213, 242);
    }
  }
  &_mobile {
    background: rgba(194, 213, 242, 0.61);
    border-radius: 5px;
    width: 60px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    transition: all 0.3s ease 0s;
    @media (any-hover: hover) {
      &:hover {
        background: rgba(194, 213, 242);
      }
    }
  }
}
.swiper {
  padding-bottom: 48px !important;
  .swiper-pagination {
    .swiper-pagination-bullet {
      position: relative;
      width: 21px;
      height: 21px;
      overflow: hidden;
      opacity: 1;
      background: transparent;
      border-radius: 3px;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border: 5px solid rgba(63, 123, 222, 0.16);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border: 8px solid #3f7bde;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease 0s;
        opacity: 0;
        visibility: hidden;
      }
      &.swiper-pagination-bullet-active {
        &::after {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
}
</style>
