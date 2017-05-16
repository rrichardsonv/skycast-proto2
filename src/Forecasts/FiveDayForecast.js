import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WeatherCard from './WeatherCard/index'

class FiveDayForecast extends Component {
  render () {

    return (
      <section className='five-day-forecast'>
        <h3>Five-Day Forecast</h3>
        {this.props.weekToDay.slice(0, 5).map((fc) => {
          return (
            <WeatherCard
              key={fc.time}
              weatherObj={fc}
            />
          )
        })}
      </section>
    )
  }
}

const { arrayOf, object } = PropTypes
FiveDayForecast.propTypes = {
  weekToDay: arrayOf(object)
}

export default FiveDayForecast