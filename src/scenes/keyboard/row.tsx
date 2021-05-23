import React from 'react';
import styled from 'styled-components';

import { themeModifier } from '../../theme/utils';

import { LetterKey } from '../letter-key';

type Props = {
  letters: string[];
  activeKey: string;
}

const $Container = styled.div`
  display: flex;
  margin-bottom: ${p => themeModifier(p.theme.baseline, 0.5)};
`;

const KeyboardRow: React.FC<Props> = ({ letters, activeKey }) => (
  <$Container>
    {letters.map(letter => {
      const isLit = letter === activeKey;
      return (
        <LetterKey key={`${letter}`} letter={letter} isLit={isLit} />
      );
    })}
  </$Container>
);

const memoizedKeyboardRow = React.memo(KeyboardRow);

export { memoizedKeyboardRow as KeyboardRow };
