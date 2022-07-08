import React from 'react';
import { CardsContainer, Title } from '../../style/CommunsStyle';
import cardTwo from '../../images/cardTwo.png';

const PageTwo = () => {
  return (
    <CardsContainer>
      <figure>
        <img src={cardTwo} />
      </figure>
      <Title>
        <h2>This is Page Two</h2>
      </Title>
    </CardsContainer>
  );
};

export default PageTwo;
