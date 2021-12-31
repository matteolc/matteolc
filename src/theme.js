import { grey, lightBlue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 typography: {
    fontFamily: [
      'Volkhov',
    ].join(','),
  }, 
  components: {
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: grey[900],
        },
      },

    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: grey[900],
        },
        secondary: {
          color: grey[700],
        },
      },
    },
  },  
  palette: {
    background: {
      default: grey[50]
    },
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[400],
    },
    custom: {
      main: lightBlue[500],
    },
  },
});

export default theme;