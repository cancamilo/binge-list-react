import React, { Component } from "react";
import SearchLine from "../assets/svg/search_line.svg";
import styled from 'styled-components';

const SearchBarFrame = styled.div`
  display: flex;
  justify-content: space-between;  
  width: 550px;
  margin: auto;
  margin-bottom: 20px;
`;

const Input = styled.input`
  outline: none;
  margin: 0;
  padding: 5px;
  background: transparent;
  width: 450px;
  border: 0px solid black;
  color: white;
  :focus {
    outline: none;
  }
`;

const Img = styled.img`
  display: block;  
  margin: auto;
  padding: 0;
`;

const SearchBtn = styled.div`
  font-size: 20px;
  color: rgb(123,191,186);
  cursor: pointer;
`;

export default class SearchBar extends Component {
  constructor(props) {
    super();
    this.textInput = React.createRef();
  }
  render() {
    return (
      <SearchBarFrame>
        <div>
          <Input ref={this.textInput} placeholder="Enter Genre"/>                
          <Img src={SearchLine} alt="search"/>          
        </div>                
        <SearchBtn>
          Search
        </SearchBtn>
      </SearchBarFrame>
    )
  }
}
