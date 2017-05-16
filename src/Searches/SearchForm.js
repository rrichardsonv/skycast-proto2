import React from 'react'
import PropTypes from 'prop-types'
import BaseComponent from '../BaseComponent'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getLocationData } from './actionCreators'

class SearchForm extends BaseComponent {
  constructor (props) {
    super(props)
    this._bind('_handleLocationSearch')
    this.state = {
      submitted: false
    }
  }
  _handleLocationSearch (ev) {
    ev.preventDefault()
    if (this.props.token) {
      this.props.dispatch(getLocationData(ev.target.firstChild.value, this.props.token))
    } else {
      this.props.dispatch(getLocationData(ev.target.firstChild.value))
    }
    this.setState({submitted: true})
  }
  render () {
    let formStatus
    if (!this.state.submitted) {
      formStatus = (
      <form
        onSubmit={this._handleLocationSearch}
        className='location-form'
      >
        <input
          type='text'
          name='postal_code'
          placeholder='zipcode'
        />
        <input type='submit' value='Forecast' />
      </form>
    )
    } else {
      formStatus = (
        <Redirect to='/forecast' />
      )
    }
    return (formStatus)
  }
}
const { func, string } = PropTypes
SearchForm.propTypes = {
  dispatch: func,
  zipcode: string,
  token: string
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    zipcode: state.searches.zipcode,
    token: state.users.token
  }
}

export default connect(mapStateToProps)(SearchForm)