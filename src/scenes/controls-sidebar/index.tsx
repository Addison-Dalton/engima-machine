import React from 'react';
import styled from 'styled-components';
import { } from 'react-redux';

import { RotorPositions } from './rotor-positions';

import { themeModifier } from '../../theme/utils';

const $Container = styled.div`
  background-color: #757070;
  flex: 0 0 ${p => themeModifier(p.theme.baseline, 10)};
  padding: ${p => p.theme.baseline};

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const ControlsSidebar = () => (
  <$Container>
    <h2>{'Controls'}</h2>
    <RotorPositions />
  </$Container>
);

const memoizedControlsSidebar = React.memo(ControlsSidebar);

export { memoizedControlsSidebar as ControlsSidebar };
