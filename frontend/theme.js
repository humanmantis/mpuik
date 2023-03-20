import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d6f93',
      light: '#BCD8E4',
    },
    secondary: {
      main: '#06040A',
    },
    info: {
      main: '#730438',
      light: '#FFDDED',
    },
    background: {
      default: '#F9F9FA',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(', '),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default responsiveFontSizes(theme);
