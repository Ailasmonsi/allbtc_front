<template>
  <div class="calculator__container">
    <div class="calculator__main">
      <div class="calculator__top">
        <div class="calculator__title">Калькулятор</div>
        <div class="calculator__text">
          Калькулятор доходности майнинга поможет узнать, какие альткоины
          выгодно майнить и какой доход принесет оборудование с учетом затрат на
          электроэнергию.
        </div>
      </div>
      <form class="calculator__form">
        <input
          type="text"
          class="calculator__input"
          placeholder="Ваш хэшрейт TH/s"
        />
        <div class="calculator__select_con">
          <select class="calculator__select">
            <option value="1" selected>
              <img src="../assets/img/orange-coin-icon.svg" alt="" />
              <img src="../assets/img/orange-propeller-icon.svg" alt="" />
              <p>Bitcoin</p>
            </option>
            <option value="2">Пункт №2</option>
            <option value="3">Пункт №3</option>
            <option value="4">Пункт №4</option>
          </select>
          <div class="arrow"></div>
        </div>
        <blue-button
          ><a href="#" class="all-link">Начать майнинг</a></blue-button
        >
      </form>
    </div>
  </div>
</template>

<script>
import BlueButton from "./UI/BlueButton";
export default {
  components: {
    BlueButton,
  },
};
</script>

<style lang="scss" scoped>
.calculator {
  margin-top: 100px;
  // .calculator__main
  &__main {
  }
  // .calculator__top
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  // .calculator__title
  &__title {
    font-family: "AmpleSoftPro";
    font-style: normal;
    font-weight: 500;
    font-size: 53px;
    line-height: 107.6%;
    color: #000034;
  }
  // .calculator__text
  &__text {
    max-width: 730px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 181.1%;
    color: #000000;
  }
  // .calculator__form
  &__form {
    display: flex;
    margin-top: 40px;
    gap: 26px;
  }
  // .calculator__input
  &__input {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 181.1%;
    color: rgba(0, 0, 0, 0.72);
    padding: 14px 30px;
  }
  // .calculator__select
  &__select {
    // .calculator__select_con
    &_con {
      position: relative;
      width: fit-content;
      & .arrow {
        position: absolute;
        background-image: url("../assets/img/arrow-down-icon-blue.svg");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 18px;
        height: 18px;
        top: 50%;
        right: 20px;
        transform: translate(0, -50%);
        transition: all 0.3s ease 0s;
      }
    }
    &:focus-within ~ .arrow {
      transform: translate(0, -50%) rotate(-180deg);
    }
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background-image: none;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 181.1%;
    color: #000000;
    padding: 14px 30px;
    min-width: 300px;
    & option {
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 181.1%;
      color: rgba(0, 0, 0, 0.72);
      border: 1px solid red;
    }
    &::-ms-expand {
      display: none;
    }
  }
}

.all-link {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
