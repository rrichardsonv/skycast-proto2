import React from 'react'
import PropTypes from 'prop-types'
import BaseComponent from '../../BaseComponent'
import iconDict from './iconDict.json'

class WeatherCard extends BaseComponent {
  constructor (props) {
    super(props)
    this._bind('_resolveIcon', '_resolveWeekDay')
  }
  _resolveIcon (data) {
    // currently no snow icon included
    const query = data
    var queryResult = iconDict.weather.map((obj) => {
      var mappedObj = Object.assign({}, obj)
      mappedObj.matcher = new RegExp(obj.matcher, 'i')
      return mappedObj
    })
    .filter((obj) => {
      return query.match(obj.matcher)
    })
    return queryResult[0]
  }
  _resolveWeekDay (time) {
    const days = {0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat'}
    return days[(new Date(time * 1000)).getDay()]
  }
  render () {
    const weather = this.props.weatherObj
    const image = this._resolveIcon(weather.icon)
    let tempReadOut
    if (this.props.today) {
      tempReadOut = [(
        <span className='temp-label'>{Math.round(weather.temperature)}</span>
      )]
    } else {
      tempReadOut = [(
        <div
          className='temp-readout hi'
        >
          <span className='temp-label'>Hi:{Math.round(weather.temperatureMax)}</span>
        </div>
      ), (
        <div
          className='temp-readout lo'
        >
          <span className='temp-label'>Lo:{Math.round(weather.temperatureMin)}</span>
        </div>
      )]
    }
    return (
      <div className='weather-card'>
        <img className='weather-icon' src={`${process.env.PUBLIC_URL}/${image.icon}`} alt='forecast-img' />
        <div className='summary'>
          {weather.summary}
        </div>
        {tempReadOut.map((html) => {
          return html
        })}
        <div className='weekday'>
          {this._resolveWeekDay(weather.time)}
        </div>
      </div>
    )
  }
}
const { object, bool } = PropTypes
WeatherCard.propTypes = {
  weatherObj: object,
  today: bool
}

export default WeatherCard
