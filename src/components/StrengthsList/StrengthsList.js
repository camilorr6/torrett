import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ElderlyIcon from '@mui/icons-material/Elderly';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import SkillDialog from '../SkillDialog/SkillDialog';

const StrengthsList = ({ strengths }) => {
  const proficiencyLevels = {
    master: { title: 'Master', skills: [], icon: <DirectionsRunIcon /> },
    expert: { title: 'Expert', skills: [], icon: <DirectionsRunIcon /> },
    proficient: { title: 'Proficient', skills: [], icon: <DirectionsBikeIcon /> },
    novice: { title: 'Beginner', skills: [], icon: <ElderlyIcon /> },
    interested: { title: 'No Experience but Interested', skills: [], icon: <DirectionsWalkIcon /> },
  };

  strengths.forEach((strength) => {
    const { proficiency } = strength;
    if (proficiencyLevels[proficiency]) {
      proficiencyLevels[proficiency].skills.push(strength);
    }
  });

  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (strength) => {
    setSelectedChip(strength);
  };

  const handleCloseDialog = () => {
    setSelectedChip(null);
  };

  return (
    <div sx={{ backgroundColor: '#27292D' }}>
      <Typography variant="h4" gutterBottom color="#FFFFFF">
        Skills and Experiences
      </Typography>

      {Object.keys(proficiencyLevels).map((level) => {
        const { title, skills, icon } = proficiencyLevels[level];

        return (
          <div key={level} style={{ marginBottom: '1rem' }}>
            <Typography variant="h6" gutterBottom color="#FFFFFF" display="flex" alignItems="center">
              {icon}
              <span style={{ marginLeft: '0.5rem' }}>{title}</span>
            </Typography>
            {skills.length > 0 ? (
              <div style={{ marginTop: '0.5rem' }}>
                {skills.map((strength) => (
                  <Chip
                    key={strength.id}
                    label={strength.name}
                    onClick={() => handleChipClick(strength)}
                    sx={{ marginRight: '0.5rem', marginBottom: '0.5rem', color: '#FFFFFF', backgroundColor: '#383B40' }}
                  />
                ))}
              </div>
            ) : (
              <Typography variant="body2" color="textSecondary">
                No skills in this category
              </Typography>
            )}
          </div>
        );
      })}

      {selectedChip && (
        <SkillDialog
          open={true}
          onClose={handleCloseDialog}
          skill={selectedChip}
        />
      )}
    </div>
  );
};

export default StrengthsList;

