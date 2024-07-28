import React from 'react';
import { TextField, useTheme } from '@mui/material';

const StyledTextField = (props) => {
  const theme = useTheme();

  return (
    <TextField
      variant="outlined"
      sx={{
        width: '300px',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme.palette.primary.main,
          },
          '&:hover fieldset': {
            borderColor: theme.palette.primary.dark,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.light,
          },
        },
        '& .MuiInputBase-input': {
          color: theme.palette.text.primary,
        },
      }}
      {...props}
    />
  );
};

export default StyledTextField;
