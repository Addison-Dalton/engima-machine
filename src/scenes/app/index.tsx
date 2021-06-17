import React from 'react';
import styled from 'styled-components';

import { KeyBoardController } from '../keyboard';
import { InputOutputTextArea } from '../input-output-text';

const $Container = styled.div`

`;

const $Header = styled.h1`
  color: ${p => p.theme.colors.white};
`;

const App = () => (
  <$Container>
    <$Header>{'Engima'}</$Header>
    <KeyBoardController />
    <InputOutputTextArea />
  </$Container>
);

export default App;
