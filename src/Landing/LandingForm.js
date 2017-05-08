import React from 'react'
import PropTypes from 'prop-types'
import BaseComponent from '../BaseComponent'
import { Link } from 'react-router-dom'

class LandingForm extends BaseComponent {
  render () {
    return (
      <form
        className='log-form'
      >
        <input
          className='landing-form'
          type='email'
          name='email'
          placeholder='email'
        />
        <input
          className='landing-form'
          type='password'
          name='password'
          placeholder='password'
        />
        <button
          onClick={this.props.handleLogin}
          className='log-btn login'
        >
          Login
        </button>
        <button
          onClick={this.props.handleRegister}
          className='log-btn register'
        >
          Register
        </button>
        <Link
          className='log-btn guest'
          to='/search'
        >
          Continue as Guest
        </Link>
      </form>
    )
  }
}
const { func } = PropTypes
LandingForm.propTypes = {
  handleLogin: func,
  handleRegister: func
}

export default LandingForm
