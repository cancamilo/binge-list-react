import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import AddFavorite from '../assets/svg/add_favorite.svg';
import RemoveFavorite from '../assets/svg/remove_favorite.svg';
import { withFavContext } from "../App/FavListProvider";

const Icon = styled.img`
  width: 48px;
  height: 48px;  
  position: absolute;
  left: 9px;
  top: 15px;
  cursor: pointer;
  :hover {
    fill: rgb(200,200,200)
  }
`;

export class  MovieImageRaw extends React.Component {

    static propTypes = {
        movieData: PropTypes.object,
        median: PropTypes.number
    }

    constructor(props) {
        super();
        this.state = {
            isFav: props.context.isFav(props.movieData.id)
        }
        this.toggleFav = this.toggleFav.bind(this);      
        console.log(JSON.stringify(props.context));
    }

    toggleFav() {
        const isFav = this.props.context.isFav(this.props.movieData.id);

        if(isFav) {                       
            this.props.context.removeFavorite(this.props.movieData);
        } else {                        
            this.props.context.addFavorite(this.props.movieData);
        }
    }

    render(){
       // const isFav = this.props.context.isFav(this.props.movieData.id);                
       const isFav = true;
        return (      
            <div>
                <img 
                    width="140px"
                    height="200px"
                    src={this.props.movieData.poster.fullPath}
                    alt="nonempty"/>                  
                <Icon src={isFav ? RemoveFavorite: AddFavorite}
                      onClick={this.toggleFav}/>                
            </div>
        );
    }
}

const MovieImage = withFavContext(MovieImageRaw);

export default MovieImage;