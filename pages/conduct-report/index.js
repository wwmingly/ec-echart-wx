import * as echarts from '../../ec-canvas/echarts.min';
import options from "./options"
let myChart = {
  chartOne: null,
  chartTwo: null,
  chartThr: null,
  chartFour: null,
  chartFive: null
}

function init({
  canvas,
  width,
  height,
  dpr,
  optionKey
}) {
  let chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  chart.showLoading(); // 首次显示加载动画
  canvas.setChart(chart);
  let option = options[optionKey]
  chart.setOption(option);
  chart.hideLoading(); // 隐藏加载动画
  return chart;
}

function initOneChart(canvas, width, height, dpr) {
  myChart.chartOne = init({
    canvas,
    width,
    height,
    dpr,
    optionKey: 'barOption'
  });
  return myChart.chartOne;
}

function initTwoChart(canvas, width, height, dpr) {
  myChart.chartTwo = init({
    canvas,
    width,
    height,
    dpr,
    optionKey: 'barOption'
  });
  return myChart.chartTwo
}

function initThrChart(canvas, width, height, dpr) {
  myChart.chartThr = init({
    canvas,
    width,
    height,
    dpr,
    optionKey: 'pieOption'
  });
  return myChart.chartThr
}

function initFourChart(canvas, width, height, dpr) {
  myChart.chartFour = init({
    canvas,
    width,
    height,
    dpr,
    optionKey: 'pieOption'
  });
  return myChart.chartFour
}

function initFiveChart(canvas, width, height, dpr) {
  myChart.chartFive = init({
    canvas,
    width,
    height,
    dpr,
    optionKey: 'pieOption'
  });
  return myChart.chartFive
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    deviceOrientation: false,
    deviceStyle: {
      width: '100%',
      height: `500rpx`,
    },
    reportEchart: {
      onInit: initOneChart
    },
    twoEchart: {
      onInit: initTwoChart
    },
    thrEchart: {
      onInit: initThrChart
    },
    fourEchart: {
      onInit: initFourChart
    },
    fiveEchart: {
      onInit: initFiveChart
    },
    setOption: {
      setOne: {},
      setTwo: {},
      setThr: {},
      setFour: {},
      setFive: {}
    },
    startRange: '2020-01-01', // 有效时间-开始
    endRange: '2025-12-31', // 有效时间-结束
    startDate: '2021-08-10',
  },
  bindDateChange(e) {
    this.setData({
      startDate: e.detail.value
    })
  },
  // 监听横屏
  onResize: function (res) {
    let that = this
    let {
      windowHeight,
      windowWidth
    } = res.size
    let isBool = res.deviceOrientation === "landscape" ? true : false // 横屏
    this.setData({
      deviceOrientation: isBool,
      deviceStyle: {
        width: isBool ? `${windowWidth}rpx` : '100%',
        height: isBool ? `${windowHeight}rpx` : `500rpx`,
      }
    }, () => {
      wx.nextTick(() => {
        // 视图更新后，处理myChart.xxx是否已经渲染完成，再重新渲染
        let clearOne = setInterval(() => {
          if (myChart['chartOne'] && myChart['chartTwo'] && myChart['chartThr'] && myChart['chartFour'] && myChart['chartFive']) {
            clearInterval(clearOne)
            clearOne = null
            myChart.chartOne.setOption(that.data.setOption.setOne);
            myChart.chartTwo.setOption(that.data.setOption.setTwo);
            myChart.chartThr.setOption(that.data.setOption.setThr);
            myChart.chartFour.setOption(that.data.setOption.setFour);
            myChart.chartFive.setOption(that.data.setOption.setFive);
          }
        }, 100)

      })

    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showLoading({
      title: '加载中...',
    })
    // 模拟异步请求数据
    setTimeout(() => {
      let xAxisData = []
      let seriesData = []
      let xAxisData2 = []
      let seriesData2 = []
      for (let i = 1; i < 99; i++) {
        xAxisData.push(`2021-08-${i<10?'0'+i:i}`)
        seriesData.push(Math.floor(Math.random() * 100))
      }
      for (let i = 1; i < 12; i++) {
        xAxisData2.push(`2021-08-${i<10?'0'+i:i}`)
        seriesData2.push(Math.floor(Math.random() * 100))
      }
      let setOne = {
        xAxis: {
          data: xAxisData //全局变量
        },
        series: [{
          name: '收入分析',
          data: seriesData //全局变量
        }]
      }
      let setTwo = {
        xAxis: {
          data: xAxisData2 //全局变量
        },
        series: [{
          name: '收入趋势',
          data: seriesData2 //全局变量
        }]
      }
      let setThr = {
        series: [{
          name: '分析',
          type: 'pie',
          radius: '50%',
          data: [{
              value: 1048,
              name: '新顾客'
            },
            {
              value: 735,
              name: '老顾客'
            },
            {
              value: 580,
              name: '熟顾客'
            }
          ]
        }]
      }
      let setFour = {
        series: [{
          name: '分析',
          type: 'pie',
          radius: '50%',
          data: [{
              value: 550,
              name: '叠加包'
            },
            {
              value: 735,
              name: '福星卡10G'
            },
            {
              value: 510,
              name: '福星卡120G'
            },
            {
              value: 510,
              name: '福星卡40G'
            },
            {
              value: 120,
              name: '福星卡100G'
            },
            {
              value: 280,
              name: '福星卡20G'
            },
            {
              value: 380,
              name: '福星卡30G'
            },
            {
              value: 580,
              name: '福星卡80G'
            },
            {
              value: 280,
              name: '如意卡30G'
            },
            {
              value: 330,
              name: '如意卡10G'
            },
            {
              value: 880,
              name: '龙腾卡10G'
            },
            {
              value: 580,
              name: '龙腾卡100G'
            },
            {
              value: 280,
              name: '巨人卡1000G'
            },
            {
              value: 280,
              name: '花花卡10G'
            },
            {
              value: 580,
              name: '几箱卡10G'
            },
            {
              value: 520,
              name: '迹象卡10G'
            },
            {
              value: 580,
              name: '如意卡10G'
            }
          ]
        }]
      }
      let setFive = {
        series: [{
          name: '分析',
          type: 'pie',
          radius: '50%',
          data: [{
              value: 1018,
              name: '中国联通'
            },
            {
              value: 1735,
              name: '中国电信'
            },
            {
              value: 100,
              name: '中国移动'
            }
          ]
        }]
      }
      this.setData({
        setOption: {
          setOne,
          setTwo,
          setThr,
          setFour,
          setFive
        }
      })
      myChart.chartOne.setOption(setOne);
      myChart.chartTwo.setOption(setTwo);
      myChart.chartThr.setOption(setThr);
      myChart.chartFour.setOption(setFour);
      myChart.chartFive.setOption(setFive);
      wx.hideLoading()
    }, 1800)

  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})