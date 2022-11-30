<template>
  <div v-if="table" class="statistics">
    <div class="statistics__main">
      <table border="0" cellspacing="0" cellpadding="0">
        <tr class="statistics__titles">
          <th v-for="(title, i) in table.titles" :key="i">{{ title }}</th>
        </tr>
        <tr
          class="odd"
          v-for="(row, i) in table.rows"
          :key="row.id"
          :data-index="i"
        >
          <td class="statistics__height">
            <a href="#">{{ row.height }}</a>
          </td>
          <td class="statistics__text">{{ row.time }}</td>
          <td class="statistics__text statistics__complexity">
            {{ row.complexity.main }} <span> {{ row.complexity.span }} </span>
          </td>
          <td class="statistics__text statistics__change">{{ row.change }}</td>
          <td class="statistics__text statistics__bits">{{ row.bits }}</td>
          <td class="statistics__text">{{ row.average }}</td>
          <td class="statistics__text">{{ row.hashrate }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    table: {},
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  background: rgba(255, 255, 255, 0.29);
  border-radius: 21px;
  padding: 17px;
  // .statistics__main
  &__main {
    background: #ffffff;
    border-radius: 21px;
    & table {
      width: 100%;
      border-collapse: unset;
    }
    & tr.odd {
      &[data-index="0"] td {
        padding-top: 24px;
      }
      &:nth-child(2n + 1) {
        background: rgba(235, 238, 245, 0.6);
      }
    }
    & th {
      font-family: "AmpleSoftPro";
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 143.1%;
      color: #000000;
      padding: 22px 0 18px;
      text-align: left;
      border-bottom: 1px solid rgba(0, 0, 0, 0.17);
      &:first-child {
        padding-left: 44px;
      }
      &:last-child {
        padding-right: 44px;
      }
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        text-align: center;
      }
    }
    & td {
      padding-top: 7px;
      padding-bottom: 7px;
      &:first-child {
        padding-left: 44px;
      }
      &:last-child {
        padding-right: 44px;
      }
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        text-align: center;
      }
    }
  }
  // .statistics__title
  &__titles {
  }
  // .statistics__height
  &__height {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 143.1%;
    text-decoration-line: underline;
    color: #4182eb;
  }
  // .statistics__time
  &__text {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 143.1%;
    color: rgba(0, 0, 0, 0.7);
  }
  // .statistics__complexity
  &__complexity {
    & span {
      color: #e9c058;
    }
  }

  // .statistics__change
  &__change {
    color: #e9c058;
  }
}
</style>
