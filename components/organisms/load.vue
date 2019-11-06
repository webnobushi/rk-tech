<template lang="pug">
  LayoutContainer.columns.is-centered
    div.column.is-10(ref="load")
      no-ssr
        canvas(ref="loadChart" :width="canvas.width" :height="canvas.height")

</template>

<script>
import Chart from 'chart.js'

export default {
  props: {
    load: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    canvas: {
      chartObj: null,
      width: null,
      height: null
    }
  }),

  async mounted() {
    this.canvas.width = this.$refs.load.offsetWidth
    this.canvas.height = window.innerHeight * 0.5

    // canvas の生成を待つ
    await this.$nextTick()

    this.canvas.chartObj = new Chart(this.$refs.loadChart, {
      type: 'horizontalBar',
      data: {
        labels: this.load.map(item => item.date),
        datasets: [
          {
            backgroundColor: this.load.map(item =>
              colorDependRate(Math.floor(item.rate * 10))
            ),
            data: this.load.map(item => item.rate * 100)
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        barPercentage: 0.1,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                min: 0,
                max: 100
              }
            }
          ],
          yAxes: [
            {
              barPercentage: 0.5,
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    })
  }
}

// created by http://hue360.herokuapp.com/
const colorPalette = [
  '',
  '#99CFE5',
  '#44A5CB',
  '#007FB1',
  '#C0D860',
  '#A4C520',
  '#F3C759',
  '#EDAD0B',
  '#E38692',
  '#DA6272',
  '#C7243A'
]

function colorDependRate(level) {
  return colorPalette[level]
}
</script>
