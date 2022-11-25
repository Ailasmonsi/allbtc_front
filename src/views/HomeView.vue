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
      <div class="home__info">
        <div class="home__info_main home-im">
          <div class="home-im__main">
            <img src="../assets/img/graph.png" alt="" class="home-im__image" />
            <div class="home-im__content">
              <h2 class="home-im__title">Bitcoin</h2>
              <ul class="home-im__content_list">
                <li class="home-im__content_item">
                  <p class="item_span">Сложность сети</p>
                  <div class="item_info bgb">
                    32,136,448,326,378<span>+32.05 T</span>
                  </div>
                </li>
                <li class="home-im__content_item">
                  <p class="item_span">Ожидаемая следующая сложность</p>
                  <div class="item_info bgb">
                    32,136,448,326,378<span>+0.28% / 32.14 T</span>
                  </div>
                </li>
              </ul>
              <div class="home-im__content_date">
                <p class="item_span">Дата следующей сложности</p>
                <div class="item_info">8 Дней 7 Часов</div>
              </div>
              <blue-button>
                <a href="#" class="all-link">Начать майнинг</a>
              </blue-button>
            </div>
          </div>
          <div class="home-in__row">
            <div class="home-in__row_item home-inri">
              <div class="home-inri__image mon"></div>
              <div class="home-inri__content">
                <h4 class="home-inri__title">Ежедневные выплаты</h4>
                <div class="home-inri__text">
                  Без минимальной суммы за исключением ETH и ETC
                </div>
                <a href="#" class="home-inri__link"
                  >Начать получать выплаты<svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.83882 3.08785C5.06663 2.86004 5.43598 2.86004 5.66378 3.08785L9.16378 6.58785C9.39159 6.81565 9.39159 7.185 9.16378 7.4128L5.66378 10.9128C5.43598 11.1406 5.06663 11.1406 4.83882 10.9128C4.61102 10.685 4.61102 10.3157 4.83882 10.0878L7.92634 7.00033L4.83882 3.9128C4.61102 3.685 4.61102 3.31565 4.83882 3.08785Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="home-in__row_item home-inri">
              <div class="home-inri__image asic"></div>
              <div class="home-inri__content">
                <h4 class="home-inri__title">FPPS</h4>
                <div class="home-inri__text">
                  Метод вознаграждения за майнинг с наивысшей доходностью
                </div>
                <a href="#" class="home-inri__link"
                  >Подробнее<svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.83882 3.08785C5.06663 2.86004 5.43598 2.86004 5.66378 3.08785L9.16378 6.58785C9.39159 6.81565 9.39159 7.185 9.16378 7.4128L5.66378 10.9128C5.43598 11.1406 5.06663 11.1406 4.83882 10.9128C4.61102 10.685 4.61102 10.3157 4.83882 10.0878L7.92634 7.00033L4.83882 3.9128C4.61102 3.685 4.61102 3.31565 4.83882 3.08785Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <calculator-view />
  <pull-static-view />
  <collective-platform-view />
  <about-panel-view />
  <mining-info-view />
</template>
<script>
import CalculatorView from "@/components/CalculatorView";
import PullStaticView from "@/components/PullStaticView";
import CollectivePlatformView from "@/components/CollectivePlatformView";
import AboutPanelView from "@/components/AboutPanelView";
import MiningInfoView from "@/components/MiningInfoView";
export default {
  components: {
    CalculatorView,
    PullStaticView,
    CollectivePlatformView,
    AboutPanelView,
    MiningInfoView,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 100px;
  // .home__main
  &__main {
    display: flex;
    margin-bottom: 26%;
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
    z-index: -1;
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
.home-im {
  background: rgba(255, 255, 255, 0.29);
  border-radius: 21px;
  padding: 17px;
  // .home-im__main
  &__main {
    background: #ffffff;
    border-radius: 21px;
    padding: 70px;
    display: flex;
    gap: 100px;
    justify-content: space-between;
    margin-bottom: 17px;
  }
  // .home-im__image
  &__image {
    max-width: 550px;
  }
  // .home-im__content
  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 0 1 50%;
    // .home-im__content_list
    &_list {
    }
    // .home-im__content_item
    &_item {
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
    // .home-im__content_date
    &_date {
      flex: 1 1 auto;
    }
  }
  // .home-im__title
  &__title {
    font-family: AmpleSoftPro;
    font-style: normal;
    font-weight: 500;
    font-size: 64.4231px;
    line-height: 107.6%;
    color: #e9c058;
  }
}
.item {
  // .item_span
  &_span {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 143.1%;
    color: rgba(0, 0, 0, 0.55);
    margin-bottom: 12px;
  }
  // .item_info
  &_info {
    font-family: AmpleSoftPro;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 143.1%;
    color: #000034;
    display: flex;
    gap: 18px;
    & span {
      color: #e9c058;
    }
    &.bgb {
      position: relative;
      width: fit-content;
      &::before {
        content: "";
        position: absolute;
        background: rgba(233, 192, 88, 0.09);
        border-radius: 53px;
        width: 112%;
        height: 110%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
.home-in {
  // .home-in__row
  &__row {
    display: flex;
    gap: 17px;
    bottom: 100px;
    // .home-in__row_item
    &_item {
      background: #ffffff;
      border-radius: 21px;
    }
  }
}
.home-inri {
  display: flex;
  align-items: end;
  flex: 0 1 50%;
  // .home-inri__image
  &__image {
    position: relative;
    width: 200px;
    height: 100%;
    &.mon {
      &::before {
        content: "";
        position: absolute;
        background-image: url("../assets/img/coins.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 213px;
        height: 275px;
        bottom: 0;
        left: 0;
      }
    }
    &.asic {
      &::before {
        content: "";
        position: absolute;
        background-image: url("../assets/img/asic.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 182px;
        height: 260px;
        bottom: 0;
        left: 42px;
      }
    }
  }
  // .home-inri__content
  &__content {
    padding: 50px 30px;
  }
  // .home-inri__title
  &__title {
    font-family: "AmpleSoftPro";
    font-style: normal;
    font-weight: 500;
    font-size: 31px;
    line-height: 100%;
    color: #000034;
    margin-bottom: 4px;
  }
  // .home-inri__text
  &__text {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 143.1%;
    color: rgba(0, 0, 0, 0.62);
    margin-bottom: 26px;
  }
  // .home-inri__link
  &__link {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 107.6%;
    color: #4181ea;
    display: flex;
    align-items: center;
    gap: 10px;
    & svg path {
      stroke: #4181ea;
    }
    @media (any-hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
