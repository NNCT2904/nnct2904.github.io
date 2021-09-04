import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import { store } from './app/store';
import theme from './components/Theme/Theme';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
