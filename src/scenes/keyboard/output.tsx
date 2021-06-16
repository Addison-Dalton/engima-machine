import React from 'react';
import styled from 'styled-components';

import { KeyboardRow } from './row';

type Props = {
  activeKey: string;
}

const row1 = 'QWERTYUIOP'.split('');
const row2 = 'ASDFGHJKL'.split('');
const row3 = 'ZXCVBNM'.split('');

const $Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OutputKeyboard: React.FC<Props> = ({ activeKey }) => (
  <$Container>
    <KeyboardRow letters={row1} activeKey={activeKey} />
    <KeyboardRow letters={row2} activeKey={activeKey} />
    <KeyboardRow letters={row3} activeKey={activeKey} />
  </$Container>
);
