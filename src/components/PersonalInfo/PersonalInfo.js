import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './PersonalInfo.css';

const PersonalInfo = ({ genome }) => {
  const { name, picture, summaryOfBio } = genome.person;

  return (
    <Box className="personal-info-container">
      <Box className="personal-info-wrapper">
      <Avatar
  alt={name}
  src={picture}
  style={{ width: '80px', height: '80px' }}
/>
        <Typography gutterBottom variant="h4" component="div" className="personal-info-name">
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div" className="personal-info-summary">
          {summaryOfBio}
        </Typography>
      </Box>
      <Divider variant="middle" className="personal-info-divider" />
    </Box>
  );
};

export default PersonalInfo;
