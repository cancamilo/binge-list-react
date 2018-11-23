import React from 'react'
import styled from "styled-components";

const HeaderWrapper = styled.div`    
    width: 100%;
    margin: auto;
    border: 1px solid green;
    text-align: center;
`;

const ListHeader = () => {
  return (
    <HeaderWrapper>
      My Bing List
    </HeaderWrapper>
  )
}

export default ListHeader;
