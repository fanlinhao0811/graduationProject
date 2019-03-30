<template>
  <div>
    qqqqqq
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <line-chart :list-data="listData"/>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import echarts from 'echarts'
import LineChart from '../../components/Line'
export default {
  name: 'adminIndex',
  components: { LineChart },
  created: function () {
    if (!Cookies.get('user')) {
      this.$router.push({ path: '/adminLogin' })
    }
  },
  mounted () {
    this.drawLine()
  },
  props: {
    listData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    drawLine () {
      let myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        xAxis: {
          data: ['a', 'b', 'c', 'd'],
          axisTick: { show: false },
          axisLabel: {
            formatter: 'barGap: \'-100%\''
          }
        },
        yAxis: {
          splitLine: { show: false }
        },
        animationDurationUpdate: 1200,
        series: [{
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#ddd'
            }
          },
          silent: true,
          barWidth: 40,
          barGap: '-100%', // Make series be overlap
          data: [60, 60, 60, 60]
        }, {
          type: 'bar',
          barWidth: 40,
          z: 10,
          data: [45, 60, 13, 25]
        }]
      })
    }
  }
}
</script>

<style scoped>
</style>
