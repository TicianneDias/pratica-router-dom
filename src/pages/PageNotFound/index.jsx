import React from 'react';
import { CardsContainer, Title } from '../../style/CommunsStyle';
import cardNotFound from '../../images/cardNotFound.png';

const PageNotFound = () => {
  return (
    <CardsContainer>
      <figure>
        <img src={cardNotFound} />
      </figure>
      <Title>
        <h2>Page Not Found</h2>
      </Title>
    </CardsContainer>
  );
};

export default PageNotFound;
