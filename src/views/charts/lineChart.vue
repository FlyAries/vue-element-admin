<template>
    <div>
      <h3>这是条形图</h3>
      <div id="echart" style="width: 100%;height: 300px;margin-bottom: 10px"></div>
    </div>
</template>

<script>
  export default {
    name:'lineChart',
    data(){
      return{
        charts:'',
        option : {
          title: {//标题
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {//色块变量说明//这是折线图所以没有色块
          },
          xAxis: {
            type: 'category',//类型，键，可以不写
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']//键有哪些，横坐标有哪些
          },
          yAxis: {
            type: 'value'//纵坐标值，可以不写
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],//对应的值
            type: 'line'//图表的类型为line
          }]
        }
      }
    },
    methods:{
      drawLine(id){
        this.charts = this.$echarts.init(document.getElementById(id))
        this.charts.setOption(this.option)
      }
    },
    created () {
      // this.$nextTick(function() {
      //   this.drawLine('echart')
      // })
    },
    mounted () {
      this.drawLine('echart')
    }
  }
</script>

<style scoped>
  .content-title{
    clear: both;
    font-weight: 400;
    line-height: 50px;
    padding: 10px 10px;
    font-size: 22px;
    color: #1f2f3d;
  }
</style>
