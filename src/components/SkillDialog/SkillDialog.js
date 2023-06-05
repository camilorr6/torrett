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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SkillDialog = ({ open, onClose, skill }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} sx={{ backgroundColor: '#27292D' }}>
      <AppBar sx={{ position: 'relative', backgroundColor: '#27292D' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1, color: '#FFFFFF' }} variant="h6" component="div">
            {skill.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <List sx={{ backgroundColor: '#27292D' }}>
        <ListItem>
          <ListItemText primary={`Proficiency: ${skill.proficiency}`} primaryTypographyProps={{ style: { color: '#FFFFFF' } }} />
        </ListItem>
        <Divider style={{ backgroundColor: '#FFFFFF' }} />
        <ListItem>
          <ListItemText primary={`Recommendation Weight: ${skill.weight}`} primaryTypographyProps={{ style: { color: '#FFFFFF' } }} />
        </ListItem>
        <Divider style={{ backgroundColor: '#FFFFFF' }} />
        <ListItem>
          <ListItemText primary={`Recommendations: ${skill.recommendations}`} primaryTypographyProps={{ style: { color: '#FFFFFF' } }} />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default SkillDialog;

