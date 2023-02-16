import '../../../node_modules/echarts/map/js/china'

export function drawMap(echarts, container) {
  let mapData = [ {
    'startPointName': '沈阳市',
    'startPointBdLng': '123.429092',
    'startPointBdLat': '41.796768',
    'endPointName': '杭州市',
    'endPointBdLng': '120.15358',
    'endPointBdLat': '30.287458',
  },
    {
      'startPointName': '长春市',
      'startPointBdLng': '125.324501',
      'startPointBdLat': '43.886841',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '哈尔滨市',
      'startPointBdLng': '126.642464',
      'startPointBdLat': '45.756966',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '北京市',
      'startPointBdLng': '116.405289',
      'startPointBdLat': '39.904987',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '天津市',
      'startPointBdLng': '117.190186',
      'startPointBdLat': '39.125595',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '呼和浩特市',
      'startPointBdLng': '111.751990',
      'startPointBdLat': '40.841490',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '银川市',
      'startPointBdLng': '106.232480',
      'startPointBdLat': '38.486440',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '太原市',
      'startPointBdLng': '112.549248',
      'startPointBdLat': '37.857014',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '石家庄市',
      'startPointBdLng': '114.502464',
      'startPointBdLat': '38.045475',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '济南市',
      'startPointBdLng': '117.000923',
      'startPointBdLat': '36.675808',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '郑州市',
      'startPointBdLng': '113.665413',
      'startPointBdLat': '34.757977',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '西安市',
      'startPointBdLng': '108.948021',
      'startPointBdLat': '34.263161',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '武汉市',
      'startPointBdLng': '114.298569',
      'startPointBdLat': '30.584354',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '南京市',
      'startPointBdLng': '118.76741',
      'startPointBdLat': '32.041546',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '合肥市',
      'startPointBdLng': '117.283043',
      'startPointBdLat': '31.861191',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '上海市',
      'startPointBdLng': '121.472641',
      'startPointBdLat': '31.231707',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '长沙市',
      'startPointBdLng': '112.982277',
      'startPointBdLat': '28.19409',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '南昌市',
      'startPointBdLng': '115.892151',
      'startPointBdLat': '28.676493',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '福州市',
      'startPointBdLng': '119.306236',
      'startPointBdLat': '26.075302',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '广州市',
      'startPointBdLng': '113.28064',
      'startPointBdLat': '23.125177',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    }
    ,
    {
      'startPointName': '台北市',
      'startPointBdLng': '121.5200760',
      'startPointBdLat': '25.0307240',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '海口市',
      'startPointBdLng': '110.199890',
      'startPointBdLat': '20.044220',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '南宁市',
      'startPointBdLng': '108.320007',
      'startPointBdLat': '22.82402',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '重庆市',
      'startPointBdLng': '106.504959',
      'startPointBdLat': '29.533155',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '昆明市',
      'startPointBdLng': '102.71225',
      'startPointBdLat': '25.040609',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '贵阳市',
      'startPointBdLng': '106.713478',
      'startPointBdLat': '26.578342',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '成都市',
      'startPointBdLng': '104.065735',
      'startPointBdLat': '30.659462',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '兰州市',
      'startPointBdLng': '103.834170',
      'startPointBdLat': '23.125177',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    }
    ,
    {
      'startPointName': '西宁市',
      'startPointBdLng': '101.777820',
      'startPointBdLat': '36.617290',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '拉萨市',
      'startPointBdLng': '91.11450',
      'startPointBdLat': '29.644150',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '乌鲁木齐市',
      'startPointBdLng': '87.616880',
      'startPointBdLat': '43.826630',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '香港',
      'startPointBdLng': '114.165460',
      'startPointBdLat': '22.275340',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '澳门',
      'startPointBdLng': '113.549130',
      'startPointBdLat': '22.198750',
      'endPointName': '杭州市',
      'endPointBdLng': '120.15358',
      'endPointBdLat': '30.287458',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '沈阳市',
      'endPointBdLng': '123.429092',
      'endPointBdLat': '41.796768',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '长春市',
      'endPointBdLng': '125.324501',
      'endPointBdLat': '43.886841',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'sendPointName': '哈尔滨市',
      'endPointBdLng': '126.642464',
      'endPointBdLat': '45.756966',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '北京市',
      'endPointBdLng': '116.405289',
      'endPointBdLat': '39.904987',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '天津市',
      'endPointBdLng': '117.190186',
      'endPointBdLat': '39.125595',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'stendPointName': '呼和浩特市',
      'endPointBdLng': '111.751990',
      'endPointBdLat': '40.841490',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '银川市',
      'endPointBdLng': '106.232480',
      'endPointBdLat': '38.486440',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '太原市',
      'endPointBdLng': '112.549248',
      'endPointBdLat': '37.857014',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'sendPointName': '石家庄市',
      'endPointBdLng': '114.502464',
      'endPointBdLat': '38.045475',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '济南市',
      'endPointBdLng': '117.000923',
      'endPointBdLat': '36.675808',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '郑州市',
      'endPointBdLng': '113.665413',
      'endPointBdLat': '34.757977',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '西安市',
      'endPointBdLng': '108.948021',
      'endPointBdLat': '34.263161',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '武汉市',
      'endPointBdLng': '114.298569',
      'endPointBdLat': '30.584354',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '南京市',
      'endPointBdLng': '118.76741',
      'endPointBdLat': '32.041546',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '合肥市',
      'endPointBdLng': '117.283043',
      'endPointBdLat': '31.861191',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '上海市',
      'endPointBdLng': '121.472641',
      'endPointBdLat': '31.231707',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '长沙市',
      'endPointBdLng': '112.982277',
      'endPointBdLat': '28.19409',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '南昌市',
      'endPointBdLng': '115.892151',
      'endPointBdLat': '28.676493',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '福州市',
      'endPointBdLng': '119.306236',
      'endPointBdLat': '26.075302',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '广州市',
      'endPointBdLng': '113.28064',
      'endPointBdLat': '23.125177',
    }
    ,
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '台北市',
      'endPointBdLng': '121.5200760',
      'endPointBdLat': '25.0307240',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '海口市',
      'endPointBdLng': '110.199890',
      'endPointBdLat': '20.044220',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '南宁市',
      'endPointBdLng': '108.320007',
      'endPointBdLat': '22.82402',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '重庆市',
      'endPointBdLng': '106.504959',
      'endPointBdLat': '29.533155',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '昆明市',
      'endPointBdLng': '102.71225',
      'endPointBdLat': '25.040609',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '贵阳市',
      'endPointBdLng': '106.713478',
      'endPointBdLat': '26.578342',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '成都市',
      'endPointBdLng': '104.065735',
      'endPointBdLat': '30.659462',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '兰州市',
      'endPointBdLng': '103.834170',
      'endPointBdLat': '23.125177',
    }
    ,
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '西宁市',
      'endPointBdLng': '101.777820',
      'endPointBdLat': '36.617290',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointName': '拉萨市',
      'endPointBdLng': '91.11450',
      'endPointBdLat': '29.644150',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'stendPointName': '乌鲁木齐市',
      'endPointBdLng': '87.616880',
      'endPointBdLat': '43.826630',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointNamee': '香港',
      'endPointBdLng': '114.165460',
      'endPointBdLat': '22.275340',
    },
    {
      'startPointName': '杭州市',
      'startPointBdLng': '120.15358',
      'startPointBdLat': '30.287458',
      'endPointNamee': '澳门',
      'endPointBdLng': '113.549130',
      'endPointBdLat': '22.198750',
    }
  ]
  let chartOption = {
    'areaColor': '#262C38',
    'borderColor': '#fff',
    'lineColor': '#63a13b',
    'trailColor': '#dae7d1',
    'endColor': '#4ef6ed'
  }
  let series = []
  series.push({
    type: 'lines',
    zlevel: 1,
    effect: {
      show: true,
      period: 6,
      trailLength: 0.7,
      color: chartOption.trailColor,
      symbolSize: 3
    },
    lineStyle: {
      normal: {
        width: 0,
        curveness: 0.2
      }
    },
    data: initLineData(mapData)
  }, {
    type: 'lines',
    zlevel: 2,
    effect: {
      show: true,
      period: 6,
      trailLength: 0,
      symbolSize: 5
    },
    lineStyle: {
      normal: {
        color: chartOption.lineColor,
        width: 1,
        opacity: 0.4,
        curveness: 0.2
      }
    },
    data: initLineData(mapData)
  }, {
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
      brushType: 'stroke'
    },
    label: {
      normal: {
        show: false,
        position: 'right',
        formatter: '{b}'
      }
    },
    symbolSize: function (val) {
      return val[2] / 3
    },
    data: initEndPointData(mapData)
  }, {
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
      brushType: 'stroke'
    },
    label: {
      normal: {
        show: false,
        position: 'right',
        formatter: '{b}'
      }
    },
    symbolSize: function (val) {
      return val[2] / 3
    },
    itemStyle: {
      normal: {
        color: chartOption.endColor
      }
    },
    data: initStartPointData(mapData)
  })
  // 配置项开始
  let option = {
    visualMap: {
      min: 0,
      max: 30000,
      left: 'left',
      top: 'bottom',
      calculable: {
        type: true,
        realtime: true,
      },
      hoverLink: true,
      align: 'left',
      target: {
        inRange: {
          color: [ '#4cecee', '#1d4c67' ],
          symbolSize: '8'
        }
      },
      itemWidth: 18,
      itemHeight: 130,
      textStyle: {
        color: '#fff',
      },
      inRange: {
        color: [ '#4ef7f7', '#46fa5c', '#f7f230', '#f12e35' ]
      },
    },
    // 提示
    tooltip: {
      triggerOn: 'item',
      enterable: true,
    },
    geo: {
      map: 'china',
      roam: false, // 一定要关闭拖拽
      zoom: 1.2,
      center: [ 105, 36 ], // 调整地图位置
      label: {
        normal: {
          show: false, //关闭省份名展示
          fontSize: '10',
          color: '#f0f8ff'
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 1.5, //边际线大小
          borderColor: '#3f8cc4', //边界线颜色
          areaColor: '#14294a' //默认区域颜色
        },
        emphasis: {
          areaColor: '#2267c9',
          shadowOffsetX: 1,
          shadowOffsetY: 1,
          shadowBlur: 5,
          borderWidth: 0,
          shadowColor: '#010512'
        }
      }
    },
    series: series
  }
  echarts.init(container).setOption(option)
}

function initLineData(data) {
  let reault = []
  for (let i = 0; i < data.length; i ++) {
    let el = data[i]
    let fromData = `${ el.startPointBdLng },${ el.startPointBdLat }`.split(',')
    let toData = `${ el.endPointBdLng },${ el.endPointBdLat }`.split(',')
    let val = []
    val.push(fromData, toData)
    reault.push({
      fromName: el.startPointName,
      toName: el.endPointName,
      coords: val,
      value: el.num
    })
  }
  return reault
}

function initEndPointData(data) {
  let reault = []
  for (let i = 0; i < data.length; i ++) {
    let el = data[i]
    let val = `${ el.endPointBdLng },${ el.endPointBdLat },30`.split(',')
    reault.push({
      name: el.endPointName,
      value: val
    })
  }
  return reault
}

function initStartPointData(data) {
  let reault = []
  for (let i = 0; i < data.length; i ++) {
    let el = data[i]
    let val = `${ el.startPointBdLng },${ el.startPointBdLat },30`.split(',')
    reault.push({
      name: el.startPointName,
      value: val
    })
  }
  return reault
}
