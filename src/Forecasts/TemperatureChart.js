import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BarChart } from 'rd3'

class TemperatureChart extends Component {
  _formatWeatherData (data) {
    const days = {0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat'}
    var tempSummary = [{
      name: 'Low',
      values: []
    }, {
      name: 'High',
      values: []
    }]
    for (var i = 0, j = data.length - 1; i < j; i++) {
      var fc = data[i]
      var dayIndex = (new Date(fc.time * 1000)).getDay()
      tempSummary[0].values.push({
        // x: (i + 1),
        x: days[dayIndex],
        y: Math.round(fc.apparentTemperatureMin)
      })
      tempSummary[1].values.push({
        // x: (i + 1),
        x: days[dayIndex],
        y: Math.round(fc.apparentTemperatureMax - fc.apparentTemperatureMin)
      })
    }
    return tempSummary
  }
  _colorAccessor (segment, seriesIdx) {
    return ['low', 'high'][seriesIdx]
  }
  _colors (id) {
    const colors = {
      high: '#fc9b00',
      low: 'transparent'
    }
    return colors[id]
  }
  render () {
    const rawData = this.props.daily.data
    if (rawData) {
      const cleanData = this._formatWeatherData(rawData)
      return (
        <div className='temp-chart-wrapper'>
          <BarChart
            data={cleanData}
            width={500}
            height={500}
            title='Weekly Temp. Forecast'
            xAxisTickCount={7}
            yAxisLabel='Temparature (F)'
            yAxisTickCount={6}
            colors={this._colors}
            colorAccessor={this._colorAccessor}
            hoverAnimation={false}
          />
        </div>
      )
    } else {
      return (
        <span>loading...</span>
      )
    }
  }
}
const { object } = PropTypes

TemperatureChart.propTypes = {
  daily: object
}

export default TemperatureChart
