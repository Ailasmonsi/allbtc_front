<template>
  <nav class="nav__container">
    <img
      class="nav__logo headder"
      src="@/assets/img/logo_high_quality.png"
      alt="logo"
    />
    <nav-links @click="burgerAction" />
    <a v-if="viewportWidth >= 991.98" href="#" class="nav__button">
      Личный кабинет
    </a>
    <div v-else class="nav__buttons_mobile">
      <a class="nav__button_mobile" href="#"
        ><img src="./assets/img/user.svg" alt="" />
      </a>
      <div
        @click="burgerAction"
        v-if="viewportWidth < 767.98"
        class="nav__burger"
        :class="{ active: is_clicked }"
      >
        <div class="nav__burger_con">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>
  <div class="page">
    <router-view />
  </div>
  <footer-component />
</template>

<script>
import NavLinks from "@/components/NavLinks";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    NavLinks,
    FooterComponent,
  },
  data() {
    return {
      is_clicked: false,
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
    burgerAction() {
      if ((this.is_clicked == true) & (this.viewportWidth < 767.98)) {
        this.is_clicked = false;
        document.querySelector("body").style.overflow = "auto";
        document.querySelector(".nav__links_con").classList.remove("open");
      } else if ((this.is_clicked == false) & (this.viewportWidth < 767.98)) {
        this.is_clicked = true;
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".nav__links_con").classList.add("open");
      }
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
  @media (max-width: 767.98px) {
    margin-top: 80px;
  }
}
.nav__logo {
  max-width: 170px;
  @media (max-width: 767.98px) {
    &.headder {
      position: relative;
      z-index: 100;
    }
    max-width: 138px;
  }
}
nav.nav__container {
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 100%;
  box-sizing: border-box !important;
  padding: 15px;
  padding-top: 40px;
  @media (max-width: 991.98px) {
    padding-top: 20px;
  }
  @media (max-width: 767.98px) {
    position: fixed;
    gap: 15px;
    &::before {
      content: "";
      position: absolute;
      z-index: 100;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));
      background: linear-gradient(
        179.87deg,
        #e6eaf0 1.02%,
        #e6eaf1 4.79%,
        #e7ebf1 8.76%,
        #eaeef4 14.75%,
        #e8ecf2 19.07%
      );
    }
  }
}
.nav__buttons_mobile {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  z-index: 100;
  & .nav__burger {
    background: #4182ec;
    border-radius: 5px;
    width: 60px;
    height: 45px;
    gap: 4px;
    transition: all 0.3s ease 0s;
    &:active {
      background: #305ea8;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    &_con {
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 4px;
      width: 18px;
      overflow: hidden;
    }
    & span {
      display: block;
      width: 18px;
      height: 1.5px;
      flex: 0 0 1.5px;
      background-color: #fff;
      border-radius: 5px;
      position: relative;
      right: 0;
      transition: all 0.3s ease 0.3s;
      &:nth-child(2) {
        transition: all 0.3s ease 0s;
        &::before {
          transition: all 0.3s ease 0s;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #fff;
        }
      }
    }
    &.active {
      & span {
        &:nth-child(1) {
          transition: all 0.3s ease 0s;
          right: 100%;
        }
        &:nth-child(2) {
          transition: all 0.3s ease 0.3s;
          transform: rotate(45deg);
          &::before {
            transition: all 0.3s ease 0.3s;
            transform: rotate(-90deg);
          }
        }
        &:nth-child(3) {
          transition: all 0.3s ease 0s;
          right: -100%;
        }
      }
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
    height: 45px;
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
