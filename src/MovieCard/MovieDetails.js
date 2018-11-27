import React from 'react'
import RatingStar from '../assets/svg/rating_star.svg';
import CalendarIcon from '../assets/svg/calendar_icon.svg';
import AboveMedianStar from '../assets/svg/above_median_star.svg';
import { limitMaxLength } from './../tools/stringHelper';
import { DetailsWrapper, CardRow, Title, 
         LightText, Icon, OverViewText, 
         FooterLine, InfoAction } from './CardStyles';

const CardDetails = props => {
    const maxTitleLength = 20;
    const maxReviewLength = 100;

    const title = limitMaxLength(props.details.title, maxTitleLength);    
    const overview = limitMaxLength(props.details.overview, maxReviewLength);

    const releaseYear = props.details.releaseDate.slice(0,4);
    const genres = props.details.genres.reduce( (acc, genre) => `${acc} ${genre.name}` , "");
    const isAboveMedian = props.details.rating > props.median; 

    return (
      <DetailsWrapper>
        <div>
          <CardRow>
            <Title>
              {title}
            </Title>          
            <div>            
              <span>{props.details.rating} <Icon src={RatingStar}/></span>          
            </div>          
          </CardRow>
          <CardRow>
          <div>
            <Icon src={CalendarIcon} />
            <span>{releaseYear}</span>
          </div>          
          <LightText>
            {genres}
          </LightText>             
        </CardRow>      
        </div>
        <OverViewText>
          {overview}
        </OverViewText>
        <div>
          <FooterLine/>
          <CardRow>
            {isAboveMedian ? <Icon src={AboveMedianStar}/>: <div></div>}
            <InfoAction>More Info</InfoAction>
          </CardRow>
        </div>
      </DetailsWrapper>
    );
}

export default CardDetails;