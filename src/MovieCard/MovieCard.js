import React, { Component } from 'react';
import styled from "styled-components";
import MediaQuery from 'react-responsive';
import MovieDetails from './MovieDetails';
import MovieImage  from './MovieImage';
import './IconStyles.css';

const CardWrapper  = styled.div`
    display: flex;     
    position: relative; 
    padding: 10px;
`;

export default class MovieCard extends Component {
  render() {
    return (
      <CardWrapper>          
          <MovieImage movieData={this.props.movieData}/>
          <MediaQuery query="(min-device-width: 400px)">
            <MovieDetails details={this.props.movieData} median={this.props.median}/>
          </MediaQuery>
      </CardWrapper>
    )
  }
}




