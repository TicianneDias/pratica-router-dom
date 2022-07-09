import React from 'react';
import { CardsContainer, Title } from '../../style/CommunsStyle';
import cardOne from '../../images/cardOne.png';

const PageOne = () => {
  return (
    <>
      <CardsContainer>
        <figure>
          <img src={cardOne} />
        </figure>
        <Title>
          <h2>This is Page One</h2>
        </Title>
      </CardsContainer>
    </>
  );
};

export default PageOne;
