import React, { Component } from 'react'
import styled from "styled-components";
import MovieCard from './MovieCard';
import ListHeader from './ListHeader';

const ListWrapper = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
`;

export default class MovieListComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <ListHeader/>
        <ListWrapper>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </ListWrapper>
      </React.Fragment>
    )
  }
}
