import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const PersonalInfo = ({ genome }) => {
  if (!genome) {
    return <div>Loading...</div>;
  }

  const { name, picture, summaryOfBio } = genome.person;

  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Box
        sx={{
          my: 0,
          mx: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Avatar alt={name} src={picture} sx={{ width: 80, height: 80 }} />
        <Typography gutterBottom variant="h4" component="div" sx={{ color: '#fff' }}>
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: '#fff' }}>
          {summaryOfBio}
        </Typography>
      </Box>
      <Divider variant="middle" sx={{ backgroundColor: '#FFFFFF' }} />
    </Box>
  );
};

export default PersonalInfo;
