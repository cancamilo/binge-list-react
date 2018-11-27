import React, { Component } from 'react'
import MovieListComponent from '../../shared/MovieListComponent';
import * as response from './../../data/allMovies.json';
import SearchBar from '../../shared/SearchBar';
import { CalculateMedian } from '../../tools/mathHelper';

// TODO: access api and feed component with data
export default class BingListContainer extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
      median: 0,
      searchText: "Thriller"
    }
  }

  onSearchChanged = () => {
    // Replace with fetching data from API    
  }

  filterData = (data) => {
    const filteredData = data.filter( item => {
      const exists = item.genres.find( genre => genre.name.includes(this.state.searchText));
      return exists;
    });

    return filteredData;    
  }

  render() {
    return (
      <React.Fragment>        
        <SearchBar  handleSearch={this.onSearchChanged}/>        
        <MovieListComponent list={this.state.list} median={this.state.median} />
      </React.Fragment>      
    );
  }

  componentDidMount() {
    // TODO
    // request data here    
    // This will come fro the 
    const searchResults = this.filterData([...response.data]);
    const median = CalculateMedian([...searchResults]);
    this.setState({
      list : searchResults.slice(0, 40),
      median
    });
    //console.log(searchResults.slice(0, 10));
  }
}
