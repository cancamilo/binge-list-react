import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderTitle = styled.h2`
  color: white;
`;

export default class FavouriteHeader extends Component {
  static propTypes = {
    navigateToMain: PropTypes.func
  }
  render() {
    return (
      <div>
        <HeaderTitle>Favorites</HeaderTitle>
        <button onClick={() => this.props.navigateToMain(false)}>Back to Main</button>
      </div>
    )
  }
}
