<template>
  <div class="home">
    <van-field
      readonly
      clickable
      :value="value"
      label="时间选择"
      placeholder="点击选择时间"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        title="选择年月"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </van-popup>
    <van-field
      readonly
      clickable
      :value="value"
      label="时间选择"
      placeholder="点击选择时间"
      @click="showPicker1 = true"
    />
    <van-popup v-model="showPicker1" position="bottom">
      <week-picker :defaults="defaults" @onConfirm="onConfirm" />
    </van-popup>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import WeekPicker from '../components/WeekPicker.vue'
export default {
  name: 'Home',
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      showPicker: false,
      showPicker1: false,
      value: ''
    }
  },
  components: { WeekPicker },
  created() {
    console.log(echarts)
  },
  mounted() {
    // initialize the echarts instance
    var myChart = echarts.init(document.getElementById('main'))
    // Draw the chart
    myChart.setOption({
      title: {
        text: 'ECharts Getting Started Example'
      },
      tooltip: {},
      xAxis: {
        data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })
  },
  methods: {
    formatter(type, val) {
      if (type === 'year') {
        return `${val}`
      } else if (type === 'month') {
        return `第${val}月`
      }
      return val
    }
  }
}
</script>

<style lang="less" scoped>
#main {
  width: 360px;
  height: 400px;
  margin: 0 auto;
}
</style>
