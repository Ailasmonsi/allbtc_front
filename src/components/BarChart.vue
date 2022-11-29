<template>
  <div class="graph">
    <div class="graph__main">
      <div class="graph__list">
        <div v-for="graph in graphs" :key="graph.id" class="graph__item">
          <canvas id="myChart"></canvas>
          <div class="graph__item_about graph-ia">
            <ul class="graph-ia__list">
              <li
                v-for="aboutItem in graph.about"
                :key="aboutItem.id"
                class="graph-ia__item"
              >
                <div class="graph-ia__item_title">
                  {{ aboutItem.title }}
                </div>
                <div class="graph-ia__item_text">
                  {{ aboutItem.text }}<span>{{ aboutItem.span }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  props: {
    graphs: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    const graphsList = this.graphs;
    for (let i = 0; i < graphsList.length; i++) {
      const ctr = document.querySelectorAll("#myChart");
      const ctx = ctr[i].getContext("2d");

      const gradientBg = ctx.createLinearGradient(0, 0, 0, 400);
      gradientBg.addColorStop(0, "rgba(63,123,221,1)");
      gradientBg.addColorStop(1, "rgba(255,255,255,0)");

      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022"],
          datasets: [
            {
              label: graphsList[i].title,
              data: graphsList[i].values,
              borderColor: "#3f7bdd",
              backgroundColor: gradientBg,
              tension: 0.4,
              radius: 0,
            },
          ],
        },
        options: {
          fill: true,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                z: 2,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              // position: "left",
              // onClick: false,
              display: false,
            },
          },
        },
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.graph {
  // .graph__main
  &__main {
    background: rgba(255, 255, 255, 0.29);
    border-radius: 21px;
    padding: 17px;
  }
  // .graph__list
  &__list {
    display: flex;
    gap: 17px;
  }
  // .graph__item
  &__item {
    background: #ffffff;
    border-radius: 21px;
    flex: 0 1 50%;
    padding: 28px 16px;
  }
}
.graph-ia {
  margin-top: 24px;
  // .graph-ia__list
  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  // .graph-ia__item
  &__item {
    display: grid;
    grid-template-columns: 1fr auto;
    // .graph-ia__item_title
    &_title {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 158.1%;
      color: #000000;

      max-width: 230px;
    }
    // .graph-ia__item_text
    &_text {
      font-family: "AmpleSoftPro";
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 143.1%;
      color: #000034;
      display: flex;
      gap: 8px;

      & span {
        font-family: "AmpleSoftPro";
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 143.1%;
        color: #e9c058;
        white-space: nowrap;
      }
    }
  }
}
</style>
