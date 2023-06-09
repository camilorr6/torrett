import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './SkillPage.css';

const SkillPage = () => {
  const [skillData, setSkillData] = useState(null);
  const navigate = useNavigate();

  const { usernameId, skillId } = useParams();

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const responseDetail = await axios.get(`https://servertt.herokuapp.com/api/skill-details/${usernameId}/${skillId}`);
        const detailData = responseDetail.data;
        setSkillData(detailData);
      } catch (error) {
        console.error('Error fetching skill data:', error);
      }
    };

    fetchSkillData();
  }, [usernameId, skillId]);

  const handleClose = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="skill-page-container">
      <Toolbar className="skill-page-toolbar">
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
        {skillData && (
          <Typography variant="h6" component="div" className="skill-page-title">
            {skillData.name}
          </Typography>
        )}
      </Toolbar>
      <Divider />
      <List className="skill-page-list">
        {skillData && (
          <>
            <ListItem>
              <ListItemText primary={`Proficiency: ${skillData.proficiency}`} primaryTypographyProps={{ className: 'skill-page-primary' }} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={`Recommendation Weight: ${skillData.weight}`} primaryTypographyProps={{ className: 'skill-page-primary' }} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={`Recommendations: ${skillData.recommendations}`} primaryTypographyProps={{ className: 'skill-page-primary' }} />
            </ListItem>
          </>
        )}
      </List>
    </div>
  );
};

export default SkillPage;
