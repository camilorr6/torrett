import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import StrengthsList from '../StrengthsList/StrengthsList';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const GenomeContainer = () => {
  const [genome, setGenome] = useState(null);
  const { usernameId } = useParams();

  useEffect(() => {
    const fetchGenomeData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/bios/${usernameId}`);
        const genomeData = response.data;
        setGenome(genomeData);
      } catch (error) {
        console.error('Error fetching genome data:', error);
      }
    };

    fetchGenomeData();
  }, [usernameId]);

  if (!genome) {
    return (
      <Box
        sx={{
          backgroundColor: '#27292D',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          
        }}
      >
        {genome === null ? (
          <CircularProgress sx={{ color: '#CDDC39' }} />
        ) : (
          <div>Genome data does not exist.</div>
        )}
      </Box>
    );
  }
console.log(genome.strengths)
  return (
    <Box sx={{    backgroundColor: '#27292D', padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <PersonalInfo genome={genome} />
      <StrengthsList strengths={genome.strengths} />
    </Box>
  );
};

export default GenomeContainer;

