import React from 'react';
import Grid from '@mui/material/Grid';
import MediaCard from './VideoCard';

const VideoGrid: React.FC = () => {
  const cards = Array(8).fill(0); // 8개의 카드를 생성합니다.

  return (
    <Grid container spacing={2}>
      {cards.map((_, index) => (
        <Grid item xs={3} key={index}>
          <MediaCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoGrid;
