import React from 'react'
import PropTypes from 'prop-types'
import BaseComponent from '../BaseComponent'
import LandingForm from './LandingForm'
import Redirect from 'react-router-dom'
import { connect } from 'react-redux'
import { postUserCreation, postSessionCreation } from './actionCreators'

class Landing extends BaseComponent {
  constructor (props) {
    super(props)
    this._bind('_dispatchLogin', '_dispatchRegistration', '_parseCredentialsFromForm')
    this.state = {
      navigateNext: false
    }
  }
  _parseCredentialsFromForm () {
    var inputs = document.getElementsByClassName('landing-form')
    return {
      email: inputs.email.value,
      password: inputs.password.value
    }
  }
  _dispatchRegistration (ev) {
    ev.preventDefault()
    var credentials = this._parseCredentialsFromForm()
    // console.log('reg submit')
    // console.log(credentials)
    this.props.dispatch(postUserCreation(credentials))
    this.setState({navigateNext: true})
  }
  _dispatchLogin (ev) {
    ev.preventDefault()
    var credentials = this._parseCredentialsFromForm()
    // console.log('log submit')
    // console.log(credentials)
    this.props.dispatch(postSessionCreation(credentials))
    this.setState({navigateNext: true})
  }

  render () {
    if (!this.state.navigateNext) {
      return (
        <div className='landing-container'>
          <div className='centered-card'>
            <h1 className='main-heading'>SkyCast</h1>
            <LandingForm
              handleLogin={this._dispatchLogin}
              handleRegister={this._dispatchRegistration}
            />
          </div>
        </div>
      )
    } else {
      return (
        <Redirect to='/search' />
      )
    }
  }
} 
const { func, object } = PropTypes
Landing.propTypes = {
  dispatch: func,
  userData: object
}
Landing.contextTypes = {
  router: object
}
const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps)(Landing)
