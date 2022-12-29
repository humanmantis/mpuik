import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d6f93',
      light: '#BCD8E4'
    },
    secondary: {
      main: '#06040A'
    },
    info: {
      main: '#730438',
      light: '#FFDDED'
    },
    background: {
      default: '#F9F9FA'
    }
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(', ')
  }
});

export default responsiveFontSizes(theme);
