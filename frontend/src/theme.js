import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d6f93',
      light: '#BCD8E4',
    },
    secondary: {
      main: '#2c59ae',
    },
    info: {
      main: '#730438',
    },
    background: {
      default: '#F9F9FA',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(', '),
  },
});

export default theme;