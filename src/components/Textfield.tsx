import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Container, Grid } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';

export default function BasicTextFields() {
  const handleIconClick = () => {
  };

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="flex-start" wrap="nowrap">
        <Grid item>
          <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt="logo" style={{ height: '100px' }} />
        </Grid>
        <Grid item xs={12} sm={8} md={40}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="검색"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleIconClick}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
