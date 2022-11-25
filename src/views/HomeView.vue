<template>
  <div class="home">
    <div class="home__container">
      <div class="home__main">
        <div class="home__content">
          <h1 class="home__title main__title">
            Зарабатывайте на майнинге вместе с allbtc pool
          </h1>
          <div class="home__span">
            Высокий доход. Надежность. Эффективность.
          </div>
          <a href="#" class="home__button">
            Начать майнинг
            <div class="home__button_propeller"></div
          ></a>
        </div>

        <div class="home__background">
          <img
            class="home__background_image home__background_1"
            src="../assets/img/main_an_img_1.png"
            alt=""
          />
          <img
            class="home__background_image home__background_2"
            src="../assets/img/main_an_img_2.png"
            alt=""
          />
          <img
            class="home__background_image home__background_3"
            src="../assets/img/main_an_img_3.png"
            alt=""
          />
          <img
            class="home__background_image home__background_4"
            src="../assets/img/main_an_img_4.png"
            alt=""
          />
          <img
            class="home__background_image home__background_5"
            src="../assets/img/main_an_img_5.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>

<style lang="scss" scoped>
.home {
  // .home__container
  &__container {
  }
  // .home__main
  &__main {
    display: flex;
  }
  // .home__conent
  &__content {
    max-width: 670px;
    margin-top: 160px;
  }
  // .home__title
  &__title {
    margin-bottom: 20px;
  }
  // .home__span
  &__span {
    font-style: normal;
    font-weight: 300;
    font-size: 21px;
    line-height: 143.1%;
    color: #000000;
    margin-bottom: 36px;
  }
  // .home__button
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
    width: 347px;
    height: 85px;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 107.6%;
    color: #ffffff;
    background: linear-gradient(84.14deg, #3f7bdd 8.75%, #4282ec 92.01%);
    border-radius: 10px;
    position: relative;
    transition: all 0.3s ease 0s;
    @media (any-hover: hover) {
      &:hover {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        transform: translate(10px, 10px);
        &::before {
          top: 0;
          left: 0;
        }
      }
    }
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      background: linear-gradient(
        84.14deg,
        rgba(63, 123, 221, 0.27) 8.75%,
        rgba(66, 130, 236, 0.27) 92.01%
      );
      border-radius: 10px;
      width: 100%;
      height: 100%;
      top: 10px;
      left: 10px;
      transition: all 0.3s ease 0s;
    }
    // .home__button_propeller
    &_propeller {
      width: 51px;
      height: 51px;
      background: #366dc8;
      box-shadow: 0px 0px 35px rgba(255, 255, 255, 0.04),
        inset 0px 11px 6px rgba(0, 0, 0, 0.08);
      border-radius: 50%;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 36px;
        height: 36px;
        background: url("../assets/img/propeller.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-name: ventilation;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      @keyframes ventilation {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(720deg);
        }
      }
    }
  }
  // .home__background
  &__background {
    position: relative;
    top: -6em;
    // .home__background_image
    &_image {
      position: absolute;
    }
    // .home__background_1
    &_1 {
      animation-name: keyshow1;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
    // .home__background_2
    &_2 {
      animation-name: keyshow2;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
    // .home__background_3
    &_3 {
      animation-name: keyshow3;
      animation-duration: 1.1s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
    // .home__background_4
    &_4 {
      animation-name: keyshow4;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
    // .home__background_5
    &_5 {
      top: 30em;
      right: -29em;
      animation-name: imag5;
      animation-duration: 7s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    @keyframes imag5 {
      0% {
        top: 30em;
        right: -29em;
      }
      25% {
        top: 32em;
        right: -26em;
      }
      50% {
        top: 30em;
        right: -29em;
      }
      75% {
        top: 28em;
        right: -32em;
      }
      100% {
        top: 30em;
        right: -29em;
      }
    }
    @keyframes keyshow1 {
      0% {
        left: 40vw;
        top: 100vh;
      }
      100% {
        left: 0;
        top: 0;
      }
    }
    @keyframes keyshow2 {
      0% {
        right: -80em;
        top: 100em;
      }
      100% {
        top: 30em;
        right: -15em;
      }
    }
    @keyframes keyshow3 {
      0% {
        right: -90em;
        top: 100em;
      }
      100% {
        top: 43em;
        right: -33em;
      }
    }
    @keyframes keyshow4 {
      0% {
        right: -70em;
        top: 100em;
      }
      100% {
        top: 46em;
        right: -14em;
      }
    }
  }
}
</style>
