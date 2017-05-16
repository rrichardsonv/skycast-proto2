import React, { Component } from 'react'
import SearchForm from './SearchForm'

class Search extends Component {
  render () {
    return (
      <div className='search-container'>
        <div className='centered-card'>
          <SearchForm />
        </div>
      </div>
    )
  }
}

export default Search
