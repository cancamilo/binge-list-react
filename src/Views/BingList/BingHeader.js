import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Favorites from "../../assets/svg/favorites.svg";

const HeaderFrame = styled.div`
  width: 350px;
  margin: auto;
`;

const HeaderTitle = styled.h2`
  color: white;
`;

const Icon = styled.div`
  float: right;
`;

export default class BingHeader extends Component {
  static propTypes = {
    navigateToFav: PropTypes.func
  }
  render() {
    return (
      <HeaderFrame>
        <Icon onClick={() => this.props.navigateToFav(true)}>
          <img src={Favorites} alt="fav"/>
        </Icon>
        <HeaderTitle>My Bing List</HeaderTitle>
      </HeaderFrame>
    )
  }
}
