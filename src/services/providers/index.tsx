import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme/custom-theme';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Providers;
