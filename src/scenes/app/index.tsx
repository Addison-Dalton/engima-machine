import React from 'react';
import styled from 'styled-components';

import { KeyBoardController } from '../keyboard';
import { InputOutputTextArea } from '../input-output-text';
import { themeModifier } from '../../theme/utils';

const $Container = styled.div`
  display: flex;
`;

const $MachineWrapper = styled.div`
  flex: 1;
`;

const $SidebarWrapper = styled.div`
  flex: 0 0 ${p => themeModifier(p.theme.baseline, 10)};

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const $Header = styled.h1`
  color: ${p => p.theme.colors.white};

  @media screen and (max-width: ${p => p.theme.breakpoint.smallTablet}) {
    font-size: ${p => themeModifier(p.theme.font.size, 1.5)};
  }
`;

const App = () => (
  <$Container>
    <$SidebarWrapper>
      <p>{'sidebar stuff here'}</p>
    </$SidebarWrapper>
    <$MachineWrapper>
      <$Header>{'Enigma'}</$Header>
      <KeyBoardController />
      <InputOutputTextArea />
    </$MachineWrapper>
  </$Container>
);

export default App;
