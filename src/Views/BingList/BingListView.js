import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BingHeader from './BingHeader';
import BingListContainer from './BingListContainer';

const BingListWrapper = styled.div`  
    margin: auto;
    padding: 1px;    
`;

export default class BingListView extends Component {
    static propTypes = {
      navigateToFav: PropTypes.func,
      changeSearch: PropTypes.func
    }
          
    render() {
      return (
        <BingListWrapper>
            <BingHeader 
              	navigateToFav={this.props.navigateToFav}
                searchMovies={this.changeSearch}/>      
            <BingListContainer/>
        </BingListWrapper>
      )
    }
}


