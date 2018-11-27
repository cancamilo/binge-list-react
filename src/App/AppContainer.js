import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FavouriteView from './../Views/Favourites/FavouriteView';
import BingListView  from './../Views/BingList/BingListView';

const MainWrapper = styled.div`
    width: 100%;
    margin: auto;    
    padding: 1px 20px 0 20px;
    background: rgb(48,48,48);  
`;

export default class AppContainer extends Component {
    static propTypes = {
      toggleView: PropTypes.func
    }

    constructor() {
      super();
      this.state = {
        faView: false
      }

      this.handleViewChange = this.handleViewChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch() {

    }

    handleViewChange(check) {
      this.setState( {faView: check})
    }

    renderView() {
      if(this.state.faView) {
        return (
          <FavouriteView               
              navigateToMain={this.handleViewChange}/>
        )
      } 
      else {
        return (
          <BingListView  
              changeSearch={this.handleSearch}
              navigateToFav ={this.handleViewChange}/>  
        )
      }       
    }
      
    render() {
      return (
        <MainWrapper>
          {this.renderView()}
        </MainWrapper>
      )
    }
}


