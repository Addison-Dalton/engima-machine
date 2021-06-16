import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '../../store';
import { theme } from '../../theme/custom-theme';

const Providers: React.FC = ({ children }) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </ReduxProvider>
);

export default Providers;
