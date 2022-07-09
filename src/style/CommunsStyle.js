import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.div`
  h2 {
    transform: rotate(90deg);
    margin: 40px;
    position: relative;
    @media (max-width: 768px) {
      transform: rotate(0deg);
    }
  }

`;
