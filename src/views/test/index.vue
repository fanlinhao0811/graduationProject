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
  name: 'ErrorLog',
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
      },
      require: true
    }
  },
  methods: {
    drawLine () {
      let myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        series: {
          type: 'pie',
          data: [
            { name: 'A', value: 1212 },
            { name: 'B', value: 2323 },
            { name: 'C', value: 1919 }
          ]
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
