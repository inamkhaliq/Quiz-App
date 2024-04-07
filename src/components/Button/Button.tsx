import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type ButtonsProps={
    children?:React.ReactNode
}
const BasicButtons=(props:ButtonsProps)=> {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
export default BasicButtons;