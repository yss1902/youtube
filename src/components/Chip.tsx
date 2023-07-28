import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableChips() {
  const handleClick = () => {
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="전체" variant="outlined" onClick={handleClick} />
      <Chip label="게임" variant="outlined" onClick={handleClick} />
      <Chip label="뉴스" variant="outlined" onClick={handleClick} />
      <Chip label="믹스" variant="outlined" onClick={handleClick} />
      <Chip label="음악" variant="outlined" onClick={handleClick} />
      <Chip label="요리 프로그램" variant="outlined" onClick={handleClick} />
      <Chip label="반려동물" variant="outlined" onClick={handleClick} />
      <Chip label="새로운 맞춤 동영상" variant="outlined" onClick={handleClick} />
    </Stack>
  );
}