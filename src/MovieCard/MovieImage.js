import React, {Component} from "react";
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
const ImageWrapper = styled.div`
`;

export class  MovieImage extends Component {

    constructor(props) {
        super();
        this.state = {
            isFav: props.context.isFav(props.movieData.id)
        }

        this.toggleFav = this.toggleFav.bind(this);
    }

    toggleFav() {        

        if(this.state.isFav) {
            this.props.context.removeFavorite(this.props.movieData);
            this.setState({isFav: false});
        } else {
            this.props.context.addFavorite(this.props.movieData);
            this.setState({isFav: true});        
        }
    }

    render(){            
        return (      
            <ImageWrapper>
                <img 
                width="200px"
                height="250px"
                src={this.props.movieData.poster.fullPath}
                alt="nonempty"/>                  
                <Icon src={this.state.isFav ? RemoveFavorite: AddFavorite}
                      onClick={this.toggleFav}/>                
            </ImageWrapper>
        );
    }
}

export default withFavContext(MovieImage);