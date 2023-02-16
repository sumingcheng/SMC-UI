<template class="Pretreatment">
  <transition name="slide-fade">
    <div class="main">
      <div class="main_set">
        <div class="top">
          <div class="top_left">
            <div>星期三</div>
            <div>13~25℃</div>
          </div>
          <div class="top_Navigation">
            <div class="Data_view" @click="Data_view">数据资产管理</div>
            <div class="Data_monitoring" @click="passdata('/qualitymonitor/index')">数据质量管理</div>
            <div class="title">
              <div class="title_set" @click="index">部级数据资产管理与应用系统</div>
            </div>
            <div class="App_Manage">数据应用管理</div>
            <div class="Sys_Manage">系统管理</div>
          </div>
          <div class="top_right">
            <div>{{ times }}</div>
            <div class="top_right_time">{{ time }}</div>
            <div class="el-iconr" @click="App_Manage">
              <i class="el-icon-right"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- 图表部分 -->
      <div class="content">
        <div class="left">
          <div id="left1" class="left1"></div>
          <div id="left2" class="left2"></div>
          <div id="left3" class="left3"></div>
        </div>
        <div class="middle">
          <div id="middle1" class="middle1" ref="middle1"></div>
        </div>
        <div class="right">
          <div class="right1">
            <div class="right1_top">
              <div class="top1" @click="top1" :class="classObject1">车流量TOP10</div>
              <div class="top2" @click="top2" :class="classObject2">拥堵站TOP10</div>
            </div>
            <!-- 表格 -->
            <div class="down">
              <div class="right_form" v-if="top1show">
                <el-table :data="tabledata" style="width: 100%; background-color: #08143f ;"
                    :row-style="{height:'0.38rem'}" :cell-style="{padding:'0px'}" :row-class-name="TableRowClassName">
                  <el-table-column prop="Ranking" label="排名" width="50" align="center">
                    <template slot-scope="scope">
                      <div class="Circle">
                        {{ scope.row.Ranking }}
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="高速名称" width="90" align="center">
                  </el-table-column>
                  <el-table-column prop="export" label="出站口" width="120" align="left">
                  </el-table-column>
                  <el-table-column prop="flow" label="车流量" width="width" align="center">
                  </el-table-column>
                </el-table>
              </div>
              <div class="right_form" v-if="top2show">
                <el-table :data="tabledata1" style="width: 100% ;background-color: #08143f "
                    :row-style="{height:'0.38rem'}" :cell-style="{padding:'0px'}" :row-class-name="TableRowClassName">
                  <el-table-column prop="Ranking" label="排名" width="50" align="center">
                    <template slot-scope="scope">
                      <div class="Circle">
                        {{ scope.row.Ranking }}
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="高速名称" width="90" align="center">
                  </el-table-column>
                  <el-table-column prop="export" label="收费站" width="120" align="left">
                  </el-table-column>
                  <el-table-column prop="flow" label="拥堵时长" width="width" align="center">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
          <div id="right3" class="right3"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { drawMap } from './drawMap'
import * as echarts5 from 'echarts5'
import * as echarts4 from 'echarts4'

export default {
  data() {
    return {
      top1show: false,
      top2show: true,
      date: '',
      classObject1: 'top3',
      classObject2: '',
      // 年月日
      times: '',
      // 时分秒
      time: '',
      // 星期
      week: '',
      // 表格内容
      tabledata: [ {
        Ranking: 1,
        name: '水宜高速',
        export: '广东南站',
        flow: '23727辆',
      },
        {
          Ranking: 2,
          name: '北环高速',
          export: '广东西站',
          flow: '7661辆',
        },
        {
          Ranking: 3,
          name: '广深高速',
          export: '广东广清站',
          flow: '7612辆',
        },
        {
          Ranking: 4,
          name: '龙大高速',
          export: '广东南头站',
          flow: '1234辆',
        },
        {
          Ranking: 5,
          name: '水宜高速',
          export: '广东罗田主线站',
          flow: '1234辆',
        },
        {
          Ranking: 6,
          name: '水宜高速',
          export: '广东南头站',
          flow: '1234辆',
        },
        {
          Ranking: 7,
          name: '龙大高速',
          export: '广东罗田主线站',
          flow: '1234辆',
        },
        {
          Ranking: 8,
          name: '水宜高速',
          export: '广东南站',
          flow: '1234辆',
        },
        {
          Ranking: 9,
          name: '龙大高速',
          export: '广东罗田主线站',
          flow: '1234辆',
        },
        {
          Ranking: 10,
          name: '龙大高速',
          export: '广东南站',
          flow: '1234辆',
        },
      ],
      tabledata1: [ {
        Ranking: 1,
        name: '水宜高速',
        export: '广东南站',
        flow: '60分钟',
      },
        {
          Ranking: 2,
          name: '北环高速',
          export: '广东西站',
          flow: '40分钟',
        },
        {
          Ranking: 3,
          name: '广深高速',
          export: '广东广清站',
          flow: '35分钟',
        },
        {
          Ranking: 4,
          name: '龙大高速',
          export: '广东南头站',
          flow: '30分钟',
        },
        {
          Ranking: 5,
          name: '水宜高速',
          export: '广东罗田主线站',
          flow: '30分钟',
        },
        {
          Ranking: 6,
          name: '水宜高速',
          export: '广东南头站',
          flow: '30分钟',
        },
        {
          Ranking: 7,
          name: '龙大高速',
          export: '广东罗田主线站',
          flow: '30分钟',
        },
        {
          Ranking: 8,
          name: '水宜高速',
          export: '广东南站',
          flow: '30分钟',
        },
        {
          Ranking: 9,
          name: '龙大高速',
          export: '广东罗田主线站',
          flow: '30分钟',
        },
        {
          Ranking: 10,
          name: '龙大高速',
          export: '广东南站',
          flow: '30分钟',
        },
      ],
    }
  },
  created() {
    this.gettimes()
    console.log(this.gettimes())
  },
  mounted() {
    this.left1()
    this.left2()
    this.left3()
    this.middle1()
    this.right3()
    drawMap(echarts4, this.$refs.middle1)
  },
  methods: {
    gettimes() {
      let dates = new Date()
      let YY = dates.getFullYear()
      let MM = dates.getMonth() + 1
      if (MM < 10) {
        MM = '0' + MM
      }
      let DD = dates.getDate()
      if (DD < 10) {
        DD = '0' + DD
      }

      let HH = dates.getHours()
      if (HH < 10) {
        HH = '0' + HH
      }
      let Min = dates.getMinutes()
      if (Min < 10) {
        Min = '0' + Min
      }
      let Sec = dates.getSeconds()
      if (Sec < 10) {
        Sec = '0' + Sec
      }

      let Week = dates.getDay()
      var weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六')
      Week = weeks[Week]
      this.times = YY + '年' + MM + '月' + DD + '日'
      this.time = HH + ':' + Min
      this.week = Week
    },
    // 切换
    top1() {
      this.top1show = true
      this.top2show = false
      this.classObject1 = 'top3'
      this.classObject2 = ''
    },
    top2() {
      this.top1show = false
      this.top2show = true
      this.classObject2 = 'top3'
      this.classObject1 = ''
    },
    // 顶部跳转路由
    passdata(val) {
      this.$router.push({
        path: val
      })
    },
    Data_view() {
      this.$router.push({
        name: 'AssetView'
      })
    },
    index() {
      this.$router.push({
        name: 'dashboard'
      })
    },
    App_Manage() {
      this.$router.push({
        name: 'Flow',
      })
    },
    left1() {
      const chartsOne = document.getElementById('left1')
      const chart = echarts5.init(chartsOne, 'dark', {
        renderer: 'svg',
      })
      const option = {
        title: {
          text: '{a|}{b|}车流量情况',
          // 定制的标题
          textStyle: {
            gridIndex: 0,
            fontSize: 16,
            fontWeight: 'lighter',
            rich: {
              a: {
                align: 'left',
                height: 20,
                width: 3,
                backgroundColor: '#2096D4',
              },
              b: {
                align: 'left',
                height: 20,
                width: 15,
                backgroundColor: '',
              },
            },
          },
        },
        tooltip: {
          trigger: 'item',
        },
        grid: {
          top: '35%',
          width: '98%',
          height: '65%',
          bottom: '2%',
          left: 0,
          containLabel: true,
        },
        legend: {
          data: [ '总流量', '客车总流量', '货车总流量' ],
          top: '18%',
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 10,
          right: '0',
        },
        xAxis: [ {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#182B63', // 刻度线的颜色
              type: 'solid',
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#7D8CBD',
            },
          },
          type: 'category',
          axisTick: {
            show: false, //不显示坐标轴刻度线,
            alignWithLabel: true,
          },
          data: [ '00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28',
            '30',
          ],
        }, ],
        yAxis: [ {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#182B63', // 刻度线的颜色
              type: 'solid',
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#7D8CBD',
            },
          },
          name: '(万辆)',
          type: 'value',
          data: [ '0', '1000', '2000', '3000', '4000', '5000' ],
        }, ],
        series: [ {
          name: '总流量',
          data: [
            3300, 4000, 2000, 4500, 2000, 3000, 5000, 2000, 4500, 2000, 3000,
            5000, 2000, 4500, 2000, 3000,
          ],
          type: 'bar',
          barWidth: 7,
          yAxisIndex: 0,
          itemStyle: {
            normal: {
              color: new echarts5.graphic.LinearGradient(0, 0, 0, 1, [ {
                offset: 0,
                color: '#09BBFE',
              },
                {
                  offset: 1,
                  color: '#5A42EC',
                },
              ]),
            },
          },
        },
          {
            name: '客车总流量',
            data: [
              1000, 2000, 3000, 3000, 3000, 2000, 3000, 3500, 4000, 4500, 4000,
              3000, 3500, 4000, 4500, 4000, 3000,
            ],
            type: 'line',
            barWidth: 7,
            symbol: 'none',
            smooth: true,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: '#FF4655',
              },
            },
          },
          {
            name: '货车总流量',
            data: [
              2000, 2500, 2500, 2600, 2700, 2800, 2900, 3000, 2600, 3600, 3000,
              2000, 2500, 2600, 2700, 2800, 3000,
            ],
            type: 'line',
            barWidth: 7,
            symbol: 'none',
            smooth: true,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: '#00CF70',
              },
            },
          },
        ],
        backgroundColor: '',
      }
      option && chart.setOption(option)
    },
    left2() {
      const chartsOne = document.getElementById('left2')
      const chart = echarts5.init(chartsOne, 'dark', {
        renderer: 'svg',
      })
      const option = {
        title: {
          text: '{a|}{b|}近30天ETC使用趋势',
          // 定制的标题
          textStyle: {
            gridIndex: 0,
            fontSize: 16,
            fontWeight: 'lighter',
            rich: {
              a: {
                align: 'left',
                height: 20,
                width: 3,
                backgroundColor: '#2096D4',
              },
              b: {
                align: 'left',
                height: 20,
                width: 15,
                backgroundColor: '',
              },
            },
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          top: '35%',
          width: '98%',
          height: '65%',
          bottom: '2%',
          left: 0,
          containLabel: true,
        },
        legend: {
          data: [ '总量', '客车', '货车' ],
          top: '18%',
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 3,
          right: '0',
        },
        xAxis: {
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#182B63', // 刻度线的颜色
              type: 'solid',
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#7D8CBD',
            },
          },
          type: 'category',
          axisTick: {
            show: false, //不显示坐标轴刻度线,
            alignWithLabel: true,
          },
          data: [ '00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', ],
        },
        yAxis: [ {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#182B63', // 刻度线的颜色
              type: 'solid',
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#7D8CBD',
            },
          },
          name: '(万辆)',
          type: 'value',
          data: [ '0', '1000', '2000', '3000', '4000', '5000' ],
        }, ],
        series: [ {
          name: '总量',
          data: [
            4100, 4200, 4300, 4400, 5000, 4500, 4600, 4500, 4400, 4300, 4200,
            4100, 4000, 3900, 3800, 3700, 3600,
          ],
          type: 'line',
          barWidth: 7,
          yAxisIndex: 0,
          smooth: true, // 是否是平滑曲线
          symbolSize: 0, // 拐点的大小
          itemStyle: {
            normal: {
              color: '#294FCC',
            },
          },
          areaStyle: {
            color: new echarts5.graphic.LinearGradient(0, 0, 0, 1, [ {
              offset: 0,
              color: '#040d2c',
            },
              {
                offset: 1,
                color: '#294FCC',
              },
            ]),
          },
        },
          {
            name: '客车',
            data: [
              2000, 2500, 2500, 2600, 2700, 2800, 2900, 3000, 2600, 3600, 3000,
              2000, 2500, 2600, 2700, 2800, 3000,
            ],
            type: 'line',
            barWidth: 7,
            yAxisIndex: 0,
            smooth: true, // 是否是平滑曲线
            symbolSize: 0, // 拐点的大小
            itemStyle: {
              normal: {
                color: '#00CFA6',
              },
            },
            areaStyle: {
              color: new echarts5.graphic.LinearGradient(0, 0, 0, 1, [ {
                offset: 0,
                color: '#00CFA6',
              },
                {
                  offset: 1,
                  color: '#040d2b',
                },
              ]),
            },
          },
          {
            name: '货车',
            data: [
              1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 1000, 1000, 1000,
              1500, 1000, 1500, 1000, 1800, 1700,
            ],
            type: 'line',
            barWidth: 7,
            yAxisIndex: 0,
            smooth: true, // 是否是平滑曲线
            symbolSize: 0, // 拐点的大小
            itemStyle: {
              normal: {
                color: '#C2C00E',
              },
            },
            areaStyle: {
              color: new echarts5.graphic.LinearGradient(0, 0, 0, 1, [ {
                offset: 0,
                color: '#C2C00E',
              },
                {
                  offset: 1,
                  color: '#030c2b',
                },
              ]),
            },
          },
        ],
        backgroundColor: '',
      }
      option && chart.setOption(option)
    },
    left3() {
      const chartsOne = document.getElementById('left3')
      const chart = echarts5.init(chartsOne, 'dark', {
        renderer: 'svg',
      })
      const option = {
        title: {
          text: '{a|}{b|}省域流量情况',
          // 定制的标题
          textStyle: {
            gridIndex: 0,
            fontSize: 16,
            fontWeight: 'lighter',
            rich: {
              a: {
                align: 'left',
                height: 20,
                width: 3,
                backgroundColor: '#2096D4',
              },
              b: {
                align: 'left',
                height: 20,
                width: 15,
                backgroundColor: '',
              },
            },
          },
        },
        tooltip: {
          trigger: 'item',
        },
        grid: {
          top: '35%',
          width: '98%',
          height: '65%',
          bottom: '2%',
          left: 0,
          containLabel: true,
        },
        legend: {
          data: [ '跨省总流量', '省内总流量' ],
          top: '18%',
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 10,
          right: '0',
        },
        xAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: '#7D8CBD',
            },
          },
          type: 'category',
          axisTick: {
            show: false, //不显示坐标轴刻度线,
            alignWithLabel: true,
          },
          data: [
            '00',
            '02',
            '04',
            '06',
            '08',
            '10',
            '12',
            '14',
            '16',
            '18',
            '20',
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#182B63', // 刻度线的颜色
              type: 'solid',
            },
          },
        },
        yAxis: [ {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#182B63', // 刻度线的颜色
              type: 'solid',
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#7D8CBD',
            },
          },
          name: '(万辆)',
          type: 'value',
          data: [ '0', '1000', '2000', '3000', '4000', '5000' ],
        },
          {
            type: 'value',
            gridIndex: 0,
            axisLabel: {
              formatter: '{value} %',
              show: true,
              textStyle: {
                color: '#7D8CBD',
              },
            },
          },
        ],
        series: [ {
          name: '跨省总流量',
          data: [
            3300, 4000, 2000, 4500, 2000, 3000, 5000, 2000, 4500, 2000, 3000,
          ],
          type: 'bar',
          barWidth: 7,
          yAxisIndex: 0,
          itemStyle: {
            normal: {
              color: new echarts5.graphic.LinearGradient(0, 0, 0, 1, [ {
                offset: 0,
                color: '#FC686F',
              },
                {
                  offset: 1,
                  color: '#FF934C',
                },
              ]),
            },
          },
        },
          {
            name: '省内总流量',
            data: [ 30, 35, 40, 45, 40, 30, 40, 30, 20, 30, 40, 30, 20, 30 ],
            type: 'line',
            barWidth: 7,
            symbol: 'none',
            smooth: true,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: '#17BEFF',
              },
            },
          },
        ],
        backgroundColor: '',
      }
      option && chart.setOption(option)
    },
    middle1() {
    },
    right3() {
      const chartsOne = document.getElementById('right3')
      const chart = echarts5.init(chartsOne, 'dark', {
        renderer: 'svg',
      })
      const option = {
        title: {
          text: '{a|}{b|}货运周转量',
          padding: [ 20, 0, 0, 0 ],
          // 定制的标题
          textStyle: {
            gridIndex: 0,
            fontSize: 16,
            fontWeight: 'lighter',
            rich: {
              a: {
                align: 'left',
                height: 20,
                width: 3,
                backgroundColor: '#2096D4',
              },
              b: {
                align: 'left',
                height: 20,
                width: 15,
                backgroundColor: '',
              },
            },
          },
        },
        tooltip: {
          trigger: 'item',
        },
        grid: {
          top: '42%',
          width: '98%',
          height: '62%',
          bottom: 0,
          left: 0,
          containLabel: true,
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#182B63', // 刻度线的颜色
              type: 'solid',
            },
          },
          axisLabel: {
            color: '#7D8CBD',
            interval: 0,
            formatter: function (value) {
              var ret = '' //拼接加\n返回的类目项
              var maxLength = 1 //每项显示文字个数
              var valLength = value.length //X轴类目项的文字个数
              var rowN = Math.ceil(valLength / maxLength) //类目项需要换行的行数
              if (rowN > 1) {
                //如果类目项的文字大于5,
                for (var i = 0; i < rowN; i ++) {
                  var temp = '' //每次截取的字符串
                  var start = i * maxLength //开始截取的位置
                  var end = start + maxLength //结束截取的位置
                  temp = value.substring(start, end) + '\n'
                  ret += temp //凭借最终的字符串
                }
                return ret
              } else {
                return value
              }
            },
            show: true,
          },
          type: 'category',
          axisTick: {
            show: false, //不显示坐标轴刻度线,
            alignWithLabel: true,
          },
          data: [
            '河北',
            '山西',
            '辽宁',
            '吉林',
            '河南',
            '江苏',
            '浙江',
            '安徽',
            '福建',
            '上海',
          ],
        },
        yAxis: [ {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#182B63', // 刻度线的颜色
              type: 'solid',
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#7D8CBD',
            },
          },
          name: '(亿吨/公里)',
          type: 'value',
          data: [ '0', '100', '200', '300', '400', '500' ],
        }, ],
        series: [ {
          name: 'ETC用户数',
          data: [ 330, 400, 200, 450, 200, 300, 500, 200, 450, 200, 300 ],
          type: 'bar',
          barWidth: 7,
          yAxisIndex: 0,
          itemStyle: {
            normal: {
              color: new echarts5.graphic.LinearGradient(0, 0, 0, 1, [ {
                offset: 0,
                color: '#AE2CF1',
              },
                {
                  offset: 1,
                  color: '#7776FF',
                },
              ]),
              barBorderRadius: [ 15, 15, 0, 0 ],
            },
          },
        },
          {
            name: '占比',
            data: [ 100, 150, 160, 180, 200, 250, 300, 250, 200, 150, 100, 150 ],
            type: 'line',
            barWidth: 7,
            symbol: 'none',
            smooth: true,
            itemStyle: {
              normal: {
                color: '#17BEFF',
              },
            },
          },
        ],
        backgroundColor: '',
      }
      option && chart.setOption(option)
    },
    TableRowClassName({ row, rowIndex }) {
      switch (rowIndex) {
        case rowIndex = 0:
          return 't0'
          break
        case rowIndex = 1:
          return 't1'
          break
        case rowIndex = 2:
          return 't2'
          break
        case rowIndex = 3:
          return 'statistics-warning-row2'
          break
        case rowIndex = 4:
          return 'statistics-warning-row1'
          break
        case rowIndex = 5:
          return 'statistics-warning-row2'
          break
        case rowIndex = 6:
          return 'statistics-warning-row1'
          break
        case rowIndex = 7:
          return 'statistics-warning-row2'
          break
        case rowIndex = 8:
          return 'statistics-warning-row1'
          break
        case rowIndex = 9:
          return 'statistics-warning-row2'
      }
    }
  },
  mixins: [ mixin ],
}
</script>

<style lang="scss" scoped>
@import "@/assets/Map.scss";

.el-table {
  /deep/ th {
    padding: 0;
  }

  background-color: #030c2b;
}

/deep/ .el-table td {
  border-bottom: 0px solid #dfe6ec;
  font-size: 0.14rem;
}

/deep/ .el-table .el-table__header-wrapper th,
.el-table .el-table__fixed-header-wrapper th {
  font-size: 0.14rem;
  background: #08143f;
  color: #B1C2F8;

}

/deep/ .el-table th.is-leaf {
  border-bottom: 0px solid #dfe6ec;
}

/deep/ .statistics-warning-row1 {
  font-size: 0.14rem;
  background: #040e2d;
  color: #B1C2F8;
}

/deep/ .statistics-warning-row2 {
  font-size: 0.14rem;
  background: #08143f;
  color: #B1C2F8;
}

/deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #3a64af;
}

/deep/ .el-table::before {
  z-index: 0;
}

/deep/ .t0 {
  font-size: 0.14rem;
  background: #040e2d;
  color: #FF4655;
}

/deep/ .t1 {
  font-size: 0.14rem;
  background: #08143f;
  color: #F48400;
}

/deep/ .t2 {
  font-size: 0.14rem;
  background: #040e2d;
  color: #BEBC00;
}

// 滚动条的宽度
/deep/ .el-table__body-wrapper::-webkit-scrollbar {
  width: 0px; // 横向滚动条
  height: 0px; // 纵向滚动条 必写
}

// 滚动条的滑块
/deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #081332;
  border-radius: 0px;
}


.top3 {
  background-image: url("../../assets/images/btn-bg.png") !important;
}
</style>
