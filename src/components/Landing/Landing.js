import React from 'react';
import Typography from '@mui/material/Typography';
import './Landing.css'

const Landing = () => {
  return (
    <div className ="landing">
      <Typography  variant="h4" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="body1">
        Start searching by username...
      </Typography>
    </div>
  );
};

export default Landing;
