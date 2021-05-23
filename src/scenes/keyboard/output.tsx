import React from 'react';
import styled from 'styled-components';

import { KeyboardRow } from './row';

type Props = {
  activeKey: string;
}

const row1 = 'qwertyuiop'.split('');
const row2 = 'asdfghjkl'.split('');
const row3 = 'zxcvbnm'.split('');

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
