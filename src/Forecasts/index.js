import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLocationData } from '../Searches/actionCreators'
import BaseComponent from '../BaseComponent'
import CurrentForecast from './CurrentForecast'
import FiveDayForecast from './FiveDayForecast'
import TemperatureChart from './TemperatureChart'

class Forecasts extends BaseComponent {
  componentDidMount () {
    if (this.props.searchOnEnter) {
      this.props.dispatch(getLocationData(this.props.urlZip))
    }
  }
  render () {
    const hourly = this.props.forecasts.hourly
    const { cityState, zipcode } = this.props.searches
    const daily = this.props.forecasts.daily
    const currently = this.props.forecasts.currently
    const weekToDay = daily.data || []
    let currentReady
    if (currently && hourly) {
      currentReady = (
        <CurrentForecast
        currently={currently}
        hourly={hourly}
      />
      )
    } else {
      currentReady = (
        <span>...</span>
      )
    }
    return (
      <div className='results'>
        <div className='result-header'>
          <h3>{cityState}, {zipcode}</h3>
        </div>
        <div className='main-content'>
          <section className='today'>
            <h3>Current Forecast</h3>
            {currentReady}
          </section>
          <FiveDayForecast weekToDay={weekToDay}/>
          <section className='temperature-chart'>
            <TemperatureChart daily={daily} />
          </section>
        </div>
      </div>
    )
  }
}

const { shape, bool, array, string, object, func } = PropTypes
Forecasts.propTypes = {
  searchOnEnter: bool,
  urlZip: string,
  dispatch: func,
  searches: shape({
    isFetching: bool,
    zipcode: string,
    city: string,
    geolocation: array,
    error: bool
  }),
  forecasts: shape({
    isFetching: bool,
    currently: object,
    hourly: object,
    daily: object,
    error: bool
  })
}
const mapStateToProps = (state) => {
  return {
    searches: state.searches.data,
    forecasts: state.forecasts.data
  }
}

export default connect(mapStateToProps)(Forecasts)
