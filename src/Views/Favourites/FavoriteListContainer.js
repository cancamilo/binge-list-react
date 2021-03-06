import React, { Component } from 'react'
import MovieListComponent from '../../shared/MovieListComponent';
import {withFavContext } from '../../App/FavListProvider';
import { CalculateMedian } from '../../tools/mathHelper';

export class FavoriteListContainer extends Component {
  
  constructor() {
    super();
    this.state = {
      ok: true
    };
    this.mapToArray = this.mapToArray.bind(this);
  }

  mapToArray() {
      return Object.keys(this.props.context.state.favList).map( key => this.props.context.state.favList[key]);
  }
  
  render() {
    const renderList = this.mapToArray(this.props.context.state.favList);
    const median = CalculateMedian([...renderList]);
    return <MovieListComponent list={renderList} median={median} />
  
  }
}

export default withFavContext(FavoriteListContainer);
