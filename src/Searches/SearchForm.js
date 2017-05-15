import React from 'react'
import PropTypes from 'prop-types'
import BaseComponent from '../BaseComponent'
import { connect } from 'react-redux'
import { getLocationData } from './actionCreators'

class SearchForm extends BaseComponent {
  constructor (props) {
    super(props)
    this._bind('_handleLocationSearch')
  }
  _handleLocationSearch (ev) {
    ev.preventDefault()
    if (this.props.token) {
      this.props.dispatch(getLocationData(ev.target.firstChild.value, this.props.token))
    } else {
      this.props.dispatch(getLocationData(ev.target.firstChild.value))
    }
  }
  render () {
    return (
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