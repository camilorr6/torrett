import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignInDialog = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    if (username === 'renanpeixotox' && password === 'please') {
      navigate(`/api/bios/${username}`);
      onClose();
    } else {
      setSignInError('Invalid credentials');
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { backgroundColor: '#27292D' } }}>
      <DialogTitle sx={{ color: '#FFFFFF' }}>Sign In</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          InputLabelProps={{ sx: { color: 'white' } }}
          InputProps={{
            sx: {
              color: 'white',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputBase-input': {
                backgroundColor: '#27292D',
              },
            },
          }}
          sx={{ marginBottom: '4px' }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          InputLabelProps={{ sx: { color: 'white' } }}
          InputProps={{
            sx: {
              color: 'white',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputBase-input': {
                backgroundColor: '#27292D',
              },
            },
          }}
          sx={{ marginBottom: '4px', marginTop: '4px' }}
        />
        {signInError && <div style={{ color: 'red' }}>{signInError}</div>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} sx={{ color: '#CDDC39' }}>Cancel</Button>
        <Button onClick={handleSignIn} sx={{ color: '#CDDC39' }}>Sign In</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignInDialog;
