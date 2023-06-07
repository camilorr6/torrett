import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { keyframes } from '@mui/styled-engine';
import './Landing.css';

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LandingContainer = styled('div')`
  animation: ${fadeInAnimation} 1s ease-in;
`;

const Landing = () => {
  return (
    <LandingContainer className="landing">
      <Typography variant="h4" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="body1">
        Start searching by username...
      </Typography>
    </LandingContainer>
  );
};

export default Landing;
