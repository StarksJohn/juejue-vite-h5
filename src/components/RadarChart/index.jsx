
import React, { useState, useEffect } from 'react'
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
// Register the required components
echarts.use(
  [RadarChart, CanvasRenderer]
)

const Page = () => {
  const option = {
    // title: {
    //   text: '基础雷达图'
    // },
    tooltip: {},
    // legend: {
    //   data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    // },
    radar: {
      // shape: 'circle',
      splitNumber: 2,
      indicator: [
        { name: '平和质', max: 2 },
        { name: '气虚质', max: 2 },
        { name: '阳虚质', max: 2 },
        { name: '阴虚质', max: 2 },
        { name: '痰湿质', max: 2 },
        { name: '湿热质', max: 2 }
      ]
    },
    series: [{
      name: 'key',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
        {
          value: [0, 1, 1, 2, 1, 1],
          name: 'key'
        }
      ]
    }]
  }

  let timer

  useEffect(() => {
    return () => clearTimeout(timer)
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
    onChartReady={onChartReady}
    loadingOption={loadingOption}
    showLoading={false}
  />
}

export default Page
