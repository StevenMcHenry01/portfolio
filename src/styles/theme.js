import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      black: '#1c181d',
      white: '#FFFFFF',
      eggshell: '#f1f1e1'
    },
    primary: {
      main: '#27AAE1'
    },
    header: {
      background: '#696969',
      textColor: '#f5f5f5'
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
      default: '#696969',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#191b21'
      }
    },
    MuiCard: {
      root: {
        backgroundColor: '#696969'
      }
    }
  }
});

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      black: '#1c181d',
      white: '#FFFFFF',
      eggshell: '#f1f1e1'
    },
    primary: {
      main: '#27AAE1'
    },
    header: {
      background: '#f5f5f5',
      textColor: '#696969'
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
      default: '#f5f5f5',
    },
  },
});
