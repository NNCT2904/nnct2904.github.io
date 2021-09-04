import { createMuiTheme } from '@material-ui/core/styles';
import '@fontsource/viga';
import '@fontsource/jetbrains-mono';
import '@fontsource/roboto';

const theme = createMuiTheme({
  typography: {
    h2: {
      fontFamily: ['Viga'].join(','),
    },
    h4: {
      fontFamily: ['Viga'].join(','),
    },
    h5: {
      fontFamily: ['Viga'].join(','),
    },
    h6: {
      fontFamily: ['Viga'].join(','),
      fontWeight: 'lighter',
    },
    body1: {
      fontFamily: ['Roboto'].join(','),
      color: 'gray',
    },
  },
});

export default theme;
