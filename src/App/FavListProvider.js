import React, {Component} from 'react';

export const FavContext = React.createContext({
    favList: [],
    addFavorite : (movie) => {},
    removeFavorite: (movie) => {},
    isFav: (id) => {}
});

export const withFavContext = (Component) => {
    return (props) => 
        <FavContext.Consumer>
            {(context) => { 
                return <Component {...props} context={context} />
            }}
        </FavContext.Consumer>
}

export default class FavListProvider extends Component {
    state = {
       favList: []
    }

    constructor() {
        super();
        this.addFavorite = this.addFavorite.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
        this.isFav = this.isFav.bind(this);
    }

    addFavorite(movie){
        // this.setState( state => {
        //     const newList = [...state.favList];
        //     newList.push(movie);
        //     return {
        //         favList: newList
        //     }
        // })
        
        this.setState( state => {
            const newList = {...state.favList};
            newList[movie.id] = movie;            
            return {
                favList: newList
            }
        })
    }

    removeFavorite(movie){
        // this.setState( state => {
        //     return {
        //         favList: state.favList.filter( item => item.id !== movie.id)
        //     }
        // })
        this.setState( state => {
            const newList = state.favList;
            if(newList[movie.id]) {
                delete newList[movie.id];
                return {
                    favList: newList
                }
            }            
        })
    }

    isFav(id) {
        //return this.state.favList.findIndex( item => item.id === id) >= 0;
        if(this.state.favList[id]) return true;
        return false;
    }

    render() {
      return (
          <FavContext.Provider value={{
                state: this.state,
                addFavorite: this.addFavorite,
                removeFavorite: this.removeFavorite,
                isFav: this.isFav
              }}>
              {this.props.children}
          </FavContext.Provider>
      )
   }
}