import React, { Component } from 'react'
import MovieListComponent from '../../shared/MovieListComponent';
import * as response from './../../data/allMovies.json';
import SearchBar from '../../shared/SearchBar';
import { CalculateMedian } from '../../tools/mathHelper';

let initialSearch = "";

export default class BingListContainer extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
      median: 0,
      searchText: initialSearch
    }
  }

  onSearchChanged = (text) => {

    const searchText = text.trim().split(/\s+/)[0];
    const maxSize = 40;
    const searchResults = this.filterData([...response.data], searchText, maxSize);
    const median = CalculateMedian([...searchResults]);
    this.setState({
      list : searchResults.slice(0, 40),
      searchText,
      median
    });     
  }

  filterData = (data, searchText,  maxSize) => {
    const filteredData = data.filter( item => {
      const exists = item.genres.find( genre => genre.name.includes(searchText));
      return exists;
    });

    return filteredData.slice(0, maxSize);    
  }

  render() {
    return (
      <React.Fragment>        
        <SearchBar  handleSearch={this.onSearchChanged} initialText = {this.state.searchText}/>        
        <MovieListComponent list={this.state.list} median={this.state.median} />
      </React.Fragment>      
    );
  }

  componentDidMount() {

    const searchText = this.state.searchText;
    const maxSize = 40;
    const searchResults = this.filterData([...response.data], searchText, maxSize);
    const median = CalculateMedian([...searchResults]);
    this.setState({
      list : searchResults.slice(0, 40),
      median
    });
  }

  componentWillUnmount() {
    initialSearch = this.state.searchText;
    console.log(this.state.searchText);
    console.log("unmounting component");
  }
}
