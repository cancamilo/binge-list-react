import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import MovieCard from '../MovieCard/MovieCard';

const ListWrapper = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    padding: 0px;
    flex-wrap: wrap;
`;

export default class MovieListComponent extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  render() {
    return (
      <React.Fragment>
        <ListWrapper>
          {this.props.list.map( (item, index) => 
            <MovieCard key={index} movieData={item} median={this.props.median}/>
          )}
        </ListWrapper>
      </React.Fragment>
    )
  }
}
