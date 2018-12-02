import React from 'react';
import renderer from 'react-test-renderer';
import MovieImage from './MovieImage';
import MovieCard from './MovieCard';
import * as testData from '../data/allMovies.json';
import MovieDetails from './MovieDetails';  
import {withFavContext} from '../App/FavListProvider';

  
describe('<MovieCard />', () => {    

    beforeAll(() => {

        jest.mock("../App/FavListProvider", (Component) => {
            Component.defaultProps = {
                context: {
                    state: {
                        favList: [],                           
                        addFavorite : function(movie) {},
                        removeFavorite: function(movie) {},
                        isFav: function(id){},
                    }
                }
            }    
            return Component;
        });
    });    

    it('should render MovieImage with mock HOC ', () => {
        
        const dataItem = testData.data[0];  
        const component = renderer.create(
            <MovieImage movieData={dataItem}/>
        );

        const instance = component.root; 
        expect(instance).toBeDefined();        
    });

    it('should render MovieCard components', () => {
        const dataItem = testData.data[0];  
        const component = renderer.create(
            <MovieCard movieData={dataItem} median={8}/>
          );        

        const instance = component.root; 
        const img = instance.findAllByType(MovieImage)
        expect(img.length).toBe(1);
    });

  //   it('should do 1 ', () => {
  //     // This will use the default context param since we pass nothing

  //     const median = 5.0;
  //     const dataItem = testData.data[0];        
  //     const {getByTestId} = renderer.create(
  //         <MovieImage movieData={dataItem} median={median}/>,
  //     );
  
  //     //expect(getByTestId("ok")).toHaveTextContent("okiii");
  //   });
  // });
  
  // describe('<MovieImage />', () => {
  //   it('should do 2 ', () => {
  //     // This will use the default context param since we pass nothing
      
  //     jest.mock("../App/FavListProvider", () => {
  //       return {
  //         withFavContext: (Component) => {
  //           Component.defaultProps.context.state = mockContext;
  //           return Component;
  //         }
  //       }
  //      });    
  
  //     const median = 5.0;
  //     const dataItem = testData.data[0];        
  //     const {getByTestId} = renderer.create(
  //         <MovieCard movieData={dataItem}/>,
  //     );    
  //   });  
  });