import React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import './SkillDialog.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SkillDialog = ({ open, onClose, skill }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className="skill-dialog-container">
      <AppBar position="relative" className="skill-dialog-appbar" sx={{ backgroundColor: '#27292D' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="div" className="skill-dialog-title">
            {skill.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <List className="skill-dialog-list">
        <ListItem>
          <ListItemText primary={`Proficiency: ${skill.proficiency}`} primaryTypographyProps={{ className: 'skill-dialog-primary' }} />
        </ListItem>
        <Divider className="skill-dialog-divider" />
        <ListItem>
          <ListItemText primary={`Recommendation Weight: ${skill.weight}`} primaryTypographyProps={{ className: 'skill-dialog-primary' }} />
        </ListItem>
        <Divider className="skill-dialog-divider" />
        <ListItem>
          <ListItemText primary={`Recommendations: ${skill.recommendations}`} primaryTypographyProps={{ className: 'skill-dialog-primary' }} />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default SkillDialog;
