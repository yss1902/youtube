import React from 'react';
import SwipeableTemporaryDrawer from './components/Drawer';
import BasicTextFields from './components/Textfield';
import ClickableChips from './components/Chip';
import VideoGrid from './components/VideoGrid';
import { Box, Container, Grid} from '@mui/material';
import Icons from './components/UserIcon';

function App() {
  return (
    <Container maxWidth="xl">
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <Grid container direction="row" alignItems="center" justifyContent="space-between">
            <Grid item>
              <SwipeableTemporaryDrawer />
            </Grid>
            <Grid item xs={8}>
              <BasicTextFields />
            </Grid>
            <Grid item>
              <Icons />
            </Grid>
          </Grid>
        </Grid>
        <Box marginLeft={24}>
          <Grid item>
            <ClickableChips />
          </Grid>
        </Box>
        <Box mt={2}>
          <Grid container justifyContent="center">
            <Grid item xs={9}>
              <VideoGrid />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}

export default App;
