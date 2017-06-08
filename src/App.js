import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import rootReducer from './rootReducer'
import Landing from './Users/index'
import Search from './Searches/index'
import Forecasts from './Forecasts/index'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logo from '../public/sunny_header.svg'
import cloud from '../public/cloudy_header.svg'
import './App.css';

const store = createStore(rootReducer,
  applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>SkyCast Prototype</h1>
            <div className="cloud-path">
              <img src={cloud} className="moving-cloud"  alt="☁"/>
            </div>
          </div>
          <div className="app-content">
            <Route exact path='/' component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/forecast' component={Forecasts} />
            <Route
              path='/weather/:zip'
              component={(props) => {
                let resultComponent
                // console.log(props.match)
                if (props.match.params.zip) {
                  resultComponent = (
                    <Forecasts
                      urlZip={props.match.params.zip}
                      searchOnEnter
                    />
                  )
                } else {
                  resultComponent = (
                    null
                  )
                }
                return resultComponent
              }}
            />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
