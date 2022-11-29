<template>
  <div class="complexity">
    <div class="complexity__container">
      <div class="complexity__main">
        <div class="complexity__content">
          <h1 class="complexity__title main__title">Сложность сети</h1>
          <div class="complexity__text main__text">
            Сложность корректируется каждые 2016 блоков (примерно каждые 2
            недели), чтобы среднее время между каждым блоком оставалось в
            размере 10 минут.
          </div>
        </div>
        <div class="complexity__image">
          <img src="../assets/img/compl-main-img.png" alt="" />
        </div>
      </div>
      <BarChart :graphs="graphs" />
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";

export default {
  components: { BarChart },
  data() {
    return {
      graphs: [
        {
          id: 1,
          title: "Сложность",
          values: [48, 30, 50, 48, 56, 57, 40],
          about: [
            {
              id: 11,
              title: "Хэшрейт",
              text: "201.67 EH/s",
            },
            {
              id: 12,
              title: "Сложность",
              text: "28,174,668,481,289",
              span: "28.17 T",
            },
          ],
        },
        {
          id: 2,
          title: "Сложность (Шкала)",
          values: [0, 0.9, 3, 7, 4, 9, 8, 16],
          about: [
            {
              id: 21,
              title: "Ожидаемая следующая сложность",
              text: "28,452,668,782,523",
              span: "(+0.99%) 28.45 T",
            },
            {
              id: 22,
              title: "Дата следующей сложности",
              text: "1 Дни 1 Часы",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.complexity {
  // .complexity__main
  &__main {
    display: flex;
    align-items: center;
  }
  // .complexity__content
  &__content {
    flex: 1 0 40%;
    position: relative;
  }
  // .complexity__title
  &__title {
    margin-bottom: 24px;
  }
  // .complexity__text
  &__text {
  }
  // .complexity__image
  &__image {
    & img {
      max-width: 1050px;
    }
  }
}
</style>
