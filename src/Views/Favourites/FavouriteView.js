import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FavouriteHeader from './FavouriteHeader';
import FavoriteListContainer from './FavoriteListContainer';

const FavoriteWrapper = styled.div`        
    margin: auto;
    padding: 1px;    
`;

export default class FavouriteView extends Component {
    static propTypes = {
      navigateToMain: PropTypes.func
    }
  
    render() {
      return (
        <FavoriteWrapper>
          <FavouriteHeader navigateToMain={this.props.navigateToMain}/>                    
          <FavoriteListContainer/>
        </FavoriteWrapper>
      )
    }
}
