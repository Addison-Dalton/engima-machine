import React from 'react';
import styled from 'styled-components';

import { KeyBoardController } from '../keyboard';
import { InputOutputTextArea } from '../input-output-text';
import { ControlsSidebar } from '../controls-sidebar';
import { themeModifier } from '../../theme/utils';

const $Container = styled.div`
  display: flex;
  height: 100vh;
`;

const $MachineWrapper = styled.div`
  flex: 1;
  margin: ${p => themeModifier(p.theme.baseline, 1)};
`;

const $Header = styled.h1`
  color: ${p => p.theme.colors.white};

  @media screen and (max-width: ${p => p.theme.breakpoint.smallTablet}) {
    font-size: ${p => themeModifier(p.theme.font.size, 1.5)};
  }
`;

const App = () => (
  <$Container>
    <ControlsSidebar />
    <$MachineWrapper>
      <KeyBoardController />
      <InputOutputTextArea />
    </$MachineWrapper>
  </$Container>
);

export default App;
