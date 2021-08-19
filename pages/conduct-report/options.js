export default {
  lineOption: {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '6%',
      right: '5%',
      bottom: '5%',
      top: '5%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: [],
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
          color: '#eee',
          width: 1,
        }
      },
      axisLabel: {
        color: '#333',
        rotate: 45,
        fontSize: 10
      }
    }],
    yAxis: [{
      type: 'value',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#eee',
          width: 1,
          type: 'dashed'
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLabel: {
        color: '#333'
      }
    }],
    series: [{
      name: '分析',
      type: 'line',
      showSymbol: false,
      smooth: false,
      data: []
    }]
  },
  barOption: {
    color: '#34a5cd',
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '6%',
      right: '5%',
      bottom: '5%',
      top: '13%',
      containLabel: true
    },
    toolbox: {
      show: true,
      feature: {
        mark: {
          show: true
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        }
      }
    },
    xAxis: [{
      type: 'category',
      data: [],
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
          color: '#eee',
          width: 1,
        }
      },
      axisLabel: {
        color: '#333',
        rotate: 45,
        fontSize: 10
      }
    }],
    yAxis: [{
      type: 'value',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#eee',
          width: 1,
          type: 'dashed'
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLabel: {
        color: '#333'
      }
    }],
    series: [{
      name: '分析',
      type: 'bar',
      barWidth: '60%',
      data: [],
      emphasis: {
        itemStyle: {
          color: '#ff5722'
        }
      },
    }]
  },
  pieOption: {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false,
      orient: 'vertical', //horizontal/vertical
      right: 'right',
      bottom: 'bottom',
      itemWidth: 12,
      itemHeight: 12
    },
    series: [{
      name: '分析',
      type: 'pie',
      radius: '50%',
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }
}