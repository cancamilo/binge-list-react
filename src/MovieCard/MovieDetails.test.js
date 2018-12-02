import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './MovieDetails';
import * as testData from '../data/allMovies.json';
import AboveMedianStar from '../assets/svg/above_median_star.svg';

import {Title, Icon, OverViewText} from './CardStyles';

describe('<MovieDetails />', () => {

  it("should render movie title", () => {
    const dataItem = testData.data[0];  
    const component = renderer.create(
      <MovieDetails details={dataItem} median={8}/>
    );

    const instance = component.root;
    const maxTitleLength = 25;
    const renderedTitle = instance.findByType(Title).props.children;
    expect(renderedTitle.length).toBeLessThan(maxTitleLength);
    expect(renderedTitle.slice(0, 10)).toMatch(dataItem.title.slice(0,10));
  });

  it("should render movie overview", () => {
    const dataItem = testData.data[0];  
    const component = renderer.create(
      <MovieDetails details={dataItem} median={8}/>
    );

    const maxReviewLength = 100;
    const compareLength = 50;
    const instance = component.root;    
    const renderedOverview = instance.findByType(OverViewText).props.children.slice(0, compareLength);
    expect(renderedOverview.length).toBeLessThan(maxReviewLength);
    expect(renderedOverview).toMatch(dataItem.overview.slice(0,compareLength));

  });

  it("should render star if rating > median", () => {
    const dataItem = {...testData.data[0]};  
    dataItem.rating = 10;
    const component = renderer.create(
      <MovieDetails details={dataItem} median={8}/>
    );

    const instance = component.root;    
    const node = instance.findByProps({src: AboveMedianStar}); 
    expect(node).toBeDefined();
    
  });

  it("should not render star if rating < median", () => {
    const dataItem = {...testData.data[0]};  
    dataItem.rating = 0;
    const component = renderer.create(
      <MovieDetails details={dataItem} median={8}/>
    );

    const instance = component.root;    
    expect( () => instance.findByProps({src: AboveMedianStar}).toThrow());
    const icons = instance.findAllByType(Icon);
    expect(icons.length).toBe(2);
    
  });  

});


  

// });