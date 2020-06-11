import { red, grey } from '@material-ui/core/colors';
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
      default: '#454545'
    },
    card: {
      chipBackground: '#D3D3D3',
      background: '#1f2128'
    },
    switchable: {
      skillsBackground: '#696969',
      textAreaPlaceholder: grey[300],
      textArea: '#FFFFFF',
      glitchText: '#FFFFFF'
    }
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
      background: '#dbdbdb',
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
      default: '#dedede',
    },
    card: {
      chipBackground: '#D3D3D3',
      background: '#FFFFFF'
    },
    switchable: {
      skillsBackground: '#FFFFFF',
      textAreaPlaceholder: grey[600],
      textArea: '#1c181d',
      glitchText: '#1c181d'
    }
  },
});
