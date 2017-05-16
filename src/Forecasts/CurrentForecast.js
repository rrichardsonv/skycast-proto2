import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { LineChart } from 'rd3'
import WeatherCard from './WeatherCard/index'

class CurrentForecast extends Component {
  render () {
    const hourly = this.props.hourly.data || []
    let i = 0
    let rainChance = hourly.map((fc) =>{
      var hour = (new Date(fc.time * 1000)).getHours()
      return ({
        i: i++,
        time: (hour > 12 ? `${hour - 12}pm` : `${hour}am`),
        y: Math.floor(fc.precipProbability * 100)
      })
    })
    const currently = this.props.currently
    if (currently.icon && rainChance) {
      return (
        <div className='current-forecast-wrapper'>
          <WeatherCard
            today
            weatherObj={currently}
          />
          <div className='rain-chance'>
            <h4
              style={{marginTop: '0px', marginBottom: '0px'}}
            >Chance of Rain</h4>
            {rainChance.slice(0,24).map((hour) => {
              let label
              if (hour.i % 3 === 0) {
                label = hour.y + '%'
              } else {
                label = '-'
              }
              return (
                <div
                  style={{
                    width:'10px',
                    position: 'relative',
                    display: 'inline-block',
                    marginRight: '1px',
                    marginLeft: '1px',
                    height: '100px'
                  }}
                >
                  <span
                    style={{fontSize: 'xx-small'}}
                  >
                    {label}
                  </span>
                  <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    height: hour.y + 'px',
                    backgroundColor: 'blue'
                  }}
                  >
                  </div>
                </div>
              )
            })}
            <div className='x-axis'>
              <span className='start tick'>{`${rainChance[0].time}`}</span>
              <span className='mid tick'>{`${rainChance[12].time}`}</span>
              <span className='end tick'>{`${rainChance[24].time}`}</span>
            </div>
          </div>
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
  currently: object,
  hourly: object
}

export default CurrentForecast