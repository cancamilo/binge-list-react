import styled from "styled-components";

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 250px;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-between;
`;

export const CardRow = styled.div`
  display: flex;	
  justify-content: space-between;
  align-items: center; 
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const LightText = styled.div`
  font-size: 14px;
  font-weight: 200;
`;

export const Icon = styled.img`
  width: ${props => props.width? props.width: "16px"};
  height: ${props => props.height? props.height: "16px"};  
`;

export const OverViewText = styled.p`
  text-align: left;
`;

export const FooterLine = styled.div`
  border: 1px solid rgb(200,200,200);
  align-flex: flex-end;
`;

export const InfoAction = styled.div`
  color: green;
`;