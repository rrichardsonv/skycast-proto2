import React from 'react'
import PropTypes from 'prop-types'
import BaseComponent from '../BaseComponent'
import { connect } from 'react-redux'
import CurrentForecast from './CurrentForecast'
import FiveDayForecast from './FiveDayForecast'
import TemperatureChart from './TemperatureChart'
import { getLocationData } from '../Searches/actionCreators'

class Forecasts extends BaseComponent {
  componentDidMount () {
    if (this.props.searchOnEnter) {
      this.props.dispatch(getLocationData(this.props.urlZip))
    }
  }
  render () {
    const { cityState, zipcode } = this.props.searches
    const daily = this.props.forecasts.daily
    const currently = this.props.forecasts.currently
    const weekToDay = daily.data || []
    let currentReady
    if (currently) {
      currentReady = (
        <CurrentForecast currently={currently} />
      )
    } else {
      currentReady = (
        <span>...</span>
      )
    }
    return (
      <div className='results'>
        <h1>{cityState}</h1>
        <h3>{zipcode}</h3>
        <div className='main-content'>
          <section className='today'>
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
