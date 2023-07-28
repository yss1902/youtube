import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';

export default function Icons() {
  const handleIconClick = () => {};

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton onClick={handleIconClick}>
        <VideoCallIcon style={{ fontSize: '35px' }}/>
      </IconButton>
      <IconButton onClick={handleIconClick}>
        <NotificationsNoneIcon style={{ fontSize: '35px' }}/>
      </IconButton>
      <IconButton onClick={handleIconClick}>
        <PersonIcon style={{ fontSize: '35px' }}/>
      </IconButton>
    </Box>
  );
}
