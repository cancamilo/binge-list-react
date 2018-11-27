import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FavouriteHeader extends Component {
  static propTypes = {
    navigateToMain: PropTypes.func
  }
  render() {
    return (
      <div>
        <h1>Favourites</h1>
        <button onClick={() => this.props.navigateToMain(false)}>Back to Main</button>
      </div>
    )
  }
}
