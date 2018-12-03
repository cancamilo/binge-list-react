import React from 'react';
import renderer from 'react-test-renderer';
import MovieImage from './MovieImage';
import MovieCard from './MovieCard';
import * as testData from '../data/allMovies.json';
import * as provider from '../App/FavListProvider';

  
describe('<MovieCard />', () => {    

    beforeAll(() => {

        jest.mock("../App/FavListProvider");
        const withFav  = jest.spyOn(provider, "withFavContext");

        withFav.mockImplementation(Component => {
            Component.defaultProps = {
                context: {
                    state: {
                        favList: ["hey", "there"],                           
                        addFavorite : function(movie) {},
                        removeFavorite: function(movie) {},
                        isFav: function(id){},
                    }
                }
            }    
            return Component;
        });

        //provider.withFavContext = jest.fn( )

        // jest.mock("../App/FavListProvider", (Component) => {
        //     Component.defaultProps = {
        //         context: {
        //             state: {
        //                 favList: [],                           
        //                 addFavorite : function(movie) {},
        //                 removeFavorite: function(movie) {},
        //                 isFav: function(id){},
        //             }
        //         }
        //     }    
        //     return Component;
        // });
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
  });