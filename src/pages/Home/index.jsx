import React from 'react';
import { CardsContainer, Title } from '../../style/CommunsStyle';
import cardHome from '../../images/cardHome.png';

const Home = () => {
  return (
    <>
      <CardsContainer>
        <figure>
          <img src={cardHome} />
        </figure>
        <Title>
          <h2>This is Home</h2>
        </Title>
      </CardsContainer>
    </>
  );
};

export default Home;
