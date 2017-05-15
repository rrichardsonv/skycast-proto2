import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WeatherCard from './WeatherCard/index'

class CurrentForecast extends Component {
  render () {
    const currently = this.props.currently
    if (currently.icon) {
      return (
        <div className='current-forecast-wrapper'>
          <WeatherCard
            today
            weatherObj={currently}
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
CurrentForecast.propTypes = {
  currently: object
}

export default CurrentForecast