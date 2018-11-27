import React, { Component } from 'react'
import MovieListComponent from '../../shared/MovieListComponent';
import {withFavContext } from '../../App/FavListProvider';

export class FavoriteListContainer extends Component {
  
  constructor() {
    super();
    this.state = {
      ok: true
    };
  }

  render() {
    console.log(JSON.stringify(this.props.context, null, 4));
    return <MovieListComponent list={this.props.context.state.favList}/>
  
  }
}

export default withFavContext(FavoriteListContainer);
