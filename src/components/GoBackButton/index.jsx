import React from 'react';
import { GoBack, GoBackContainer } from './style';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <GoBackContainer>
      <GoBack onClick={navigateToHome}>
        <h5>Go Home</h5>
      </GoBack>
    </GoBackContainer>
  );
};

export default GoBackButton;
