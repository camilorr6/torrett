import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import StrengthsList from '../StrengthsList/StrengthsList';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import './GenomeContainer.css';

const GenomeContainer = () => {
  const [loading, setLoading] = useState(true);
  const [genome, setGenome] = useState(null);
  const [strengths, setStrengths] = useState(null)
  const { usernameId } = useParams();

  useEffect(() => {
    const fetchGenomeData = async () => {
      try {
        const responseBio = await axios.get(`https://servertt.herokuapp.com/api/basic-info/${usernameId}`);
        const responseStrengths = await axios.get(`https://servertt.herokuapp.com/api/strengths/${usernameId}`);
        const genomeData = responseBio.data;
        const StrengthsData = responseStrengths.data;
        setGenome(genomeData);
        setStrengths(StrengthsData);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setGenome(null);
        } else {
          console.error('Error fetching genome data:', error);
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchGenomeData();
  }, [usernameId]);


  if (loading) {
    return (
      <Box className="genome-container-loading">
        <CircularProgress sx={{ color:'#CDDC39' }} />
      </Box>
    );
  }

  if (genome === null) {
    return (
      <Box className="genome-container-error">
        <div>Genome data does not exist or a 404 error occurred.</div>
      </Box>
    );
  }

  return (
    <Box className="genome-container">
      <PersonalInfo genome={genome} />
      <StrengthsList strengths={strengths} usernameId={usernameId} />
    </Box>
  );
};

export default GenomeContainer;

