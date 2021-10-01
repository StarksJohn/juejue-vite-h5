
import React, { useState, useEffect, memo } from 'react'
/**
 * https://github.com/hustcc/echarts-for-react
 * Import ECharts.js modules manually to reduce bundle size
 * 手动import ,可减少 包大小
 */
import ReactEChartsCore from 'echarts-for-react/lib/core'
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core'
// Import charts, all with Chart suffix
import {
// LineChart,
// BarChart
// PieChart,
// ScatterChart,
  RadarChart
// MapChart,
// TreeChart,
// TreemapChart,
// GraphChart,
// GaugeChart,
// FunnelChart,
// ParallelChart,
// SankeyChart,
// BoxplotChart,
// CandlestickChart,
// EffectScatterChart,
// LinesChart,
// HeatmapChart,
// PictorialBarChart,
// ThemeRiverChart,
// SunburstChart,
// CustomChart,
} from 'echarts/charts'
// import components, all suffixed with Component
import {
  // GridSimpleComponent,
  // GridComponent,
  // PolarComponent,
  RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  // ToolboxComponent,
  // TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  // TitleComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  // LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  DatasetComponent
} from 'echarts/components'
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer
  // SVGRenderer,
} from 'echarts/renderers'
import PropTypes from 'prop-types'
import constant from '@/constant/constant'
// Register the required components
echarts.use(
  [RadarChart, CanvasRenderer]
)

const _RadarChart = (props) => {
  const { result } = props
  /**
   * result: {
   *   平和质: {total: 9, qs: Array(8), score: 3.125, status: '否'},
   *   气虚质: {total: 9, qs: Array(8), score: 3.125, status: '否'}
   *   ...
   * }
   * status: 3种值,「是」是2，「倾向是」是1，「否」是 0
   */
  console.log('RadarChart result=', result)
  const indicator = []
  for (const _key in result) {
    // console.log('RadarChart _key=', _key)
    indicator.push({ name: _key, max: 2 })
  }
  console.log('RadarChart indicator=', indicator)
  const value = []
  for (const val in Object.values(result)) {
    // console.log('RadarChart val=', val)
    const status = Object.values(result)[val].status
    // console.log('RadarChart status=', status)
    if (status === '是') {
      value.push(2)
    } else if (status === '倾向是') {
      value.push(1)
    } else {
      value.push(0)
    }
  }
  console.log('RadarChart value=', value)

  const option = {
    // title: {
    //   text: '基础雷达图'
    // },
    // tooltip: {},
    // legend: {
    //   data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    // },
    radar: {
      // shape: 'circle',
      splitNumber: 2,
      indicator
    },
    series: [{
      name: 'key',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
        {
          value: constant.fakeData ? value : value,
          name: 'key'
        }
      ]
    }]
  }

  // let timer

  useEffect(() => {
    return () => {
      console.log('RadarChart componentWillUnmount ')
      // clearTimeout(timer)
    }
  })

  const loadingOption = {
    text: '加载中...',
    color: '#4413c2',
    textColor: '#270240',
    maskColor: 'rgba(194, 88, 86, 0.1)',
    zlevel: 0
  }

  function onChartReady (echarts) {
    timer = setTimeout(function () {
      echarts.hideLoading()
    }, 100)
  }

  return <ReactEChartsCore
    echarts={echarts}
    option={option}
    notMerge={true}
    lazyUpdate={true}
    // style={{ height: 300 }}
    // onChartReady={onChartReady}
    loadingOption={loadingOption}
    showLoading={false}
  />
}
_RadarChart.propTypes = {
  result: PropTypes.object.isRequired
}

export default memo(_RadarChart)
