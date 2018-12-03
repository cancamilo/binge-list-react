import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;  
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  margin: auto;
`;

const HeaderTitle = styled.h2`
  color: white;
`;

const Arrow = styled.div`
  float: left;
  font-size: 40px;
  font-weight: 900;
  color: white;
  :hover {
    color: rgb(200,200,200);
  }
`;

export default class FavouriteHeader extends Component {
  static propTypes = {
    navigateToMain: PropTypes.func
  }
  render() {
    return (
      <HeaderWrapper> 
        <Arrow onClick={() => this.props.navigateToMain(false)}>&larr;</Arrow>       
        <HeaderTitle>Favorites</HeaderTitle>        
      </HeaderWrapper>
    )
  }
}
