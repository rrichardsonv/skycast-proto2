import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import rootReducer from './rootReducer'
import Landing from './Users/index'
import Search from './Searches/index'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logo from './logo.svg';
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
            <h2>Welcome to React</h2>
          </div>
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={Search} />
        </div>
      </Provider>
    )
  }
}

export default App
