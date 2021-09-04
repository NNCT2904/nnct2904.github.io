import { createMuiTheme } from '@material-ui/core/styles';
import '@fontsource/viga';
import '@fontsource/jetbrains-mono';
import '@fontsource/roboto';

const balticSea = '#343A40';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ['Viga'].join(','),
      color: balticSea,
    },
    h2: {
      fontFamily: ['Viga'].join(','),
      color: balticSea,
      fontSize: '3.5rem',
    },
    h4: {
      fontFamily: ['Viga'].join(','),
      color: balticSea,
      fontSize: '2rem',
    },
    h5: {
      fontFamily: ['Viga'].join(','),
      color: balticSea,
      letterSpacing: '0.05rem',
    },
    h6: {
      fontFamily: ['Viga'].join(','),
      fontWeight: 'lighter',
    },
    body1: {
      fontFamily: ['Roboto'].join(','),
      color: 'gray',
      fontSize: '1rem',
    },
  },
});

export default theme;
