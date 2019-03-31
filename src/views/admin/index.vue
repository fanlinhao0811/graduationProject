<template>
  <div>
    qqqqqq
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div @click="drawLine()">change</div>
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
  data () {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [],
          type: 'line'
        }]
      }
    }
  },
  created: function () {
    if (!Cookies.get('user')) {
      this.$router.push({ path: '/adminLogin' })
    }
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
      this.option.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      this.option.series[0].data = [820, 932, 901, 934, 1290, 1330, 1320]
      myChart.setOption(this.option)
    }
  }
}
</script>

<style scoped>
</style>
