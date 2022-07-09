import styled from 'styled-components';

export const GoBackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GoBack = styled.button`
  width: 100px;
  height: 25px;
  padding: 3px 7px;
  border: 2px solid white;
  background-color: transparent;
  cursor: pointer;
  
  h5 {
    color: white;

  }

  &:hover {
    color: #ec1d;
    border-color: #ec1d;
  }
`;
