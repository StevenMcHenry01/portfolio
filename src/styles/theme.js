import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    common: {
      black: '#1c181d',
      white: '#FFFFFF',
      eggshell: '#f1f1e1'
    },
    primary: {
      main: '#27AAE1'
    },
    secondary: {
      main: '#f0544f',
    },
    tertiary: {
      main: '#ffd166'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
