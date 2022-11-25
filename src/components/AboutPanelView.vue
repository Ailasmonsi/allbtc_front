<template>
  <div class="about-panel">
    <div class="about-panel__container">
      <div class="about-panel__main panel-am">
        <div class="panel-am__content">
          <div class="panel-am__title">Удобная панель управления</div>
          <div class="panel-am__text">
            Панель управления весьма удобна и обеспечивает отличную детализацию
            с регулярными обновлениями.
          </div>
        </div>
        <img
          src="../assets/img/about-panel-img.png"
          alt=""
          class="panel-am__image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-panel {
  background-image: url("../assets/img/about-panel-bg.png");
  background-position: center 30%;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 64px;
}
.panel-am {
  display: flex;
  align-items: center;
  // .panel-am__content
  &__content {
    flex: 0 0 50%;
  }
  // .panel-am__title
  &__title {
    font-family: "AmpleSoftPro";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 132.6%;
    color: #000034;
    margin-bottom: 24px;
  }
  // .panel-am__text
  &__text {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 181.1%;
    color: #000000;
  }
  // .panel-am__image
  &__image {
    max-width: 1120px;
    margin-left: -12pc;
    margin-top: -10pc;
  }
}
</style>
