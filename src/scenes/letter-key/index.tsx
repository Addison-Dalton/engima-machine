import React from 'react';
import styled from 'styled-components';

import { themeModifier } from '../../theme/utils';

type Props = {
  letter: string;
  isLit?: boolean;
}

type $Props = {
  isLit: boolean;
}

const $Container = styled.div<$Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => themeModifier(p.theme.baseline, 3)};
  height: ${p => themeModifier(p.theme.baseline, 3)};
  border-radius: 50%;
  border: 2px solid lightgray;
  background-color: ${p => (p.isLit ? p.theme.colors.litLetter : 'grey')};
  margin-left: ${p => themeModifier(p.theme.baseline, 0.25)};
  margin-right: ${p => themeModifier(p.theme.baseline, 0.25)};

  @media screen and (max-width: ${p => p.theme.breakpoint.smallDesktop}) {
    width: ${p => themeModifier(p.theme.baseline, 2)};
    height: ${p => themeModifier(p.theme.baseline, 2)};
  }

  @media screen and (max-width: ${p => p.theme.breakpoint.tablet}) {
    width: ${p => themeModifier(p.theme.baseline, 1.5)};
    height: ${p => themeModifier(p.theme.baseline, 1.5)};
  }

  @media screen and (max-width: ${p => p.theme.breakpoint.smallTablet}) {
    width: ${p => themeModifier(p.theme.baseline, 1)};
    height: ${p => themeModifier(p.theme.baseline, 1)};
  }

  @media screen and (max-width: ${p => p.theme.breakpoint.mobile}) {
    width: ${p => themeModifier(p.theme.baseline, 0.85)};
    height: ${p => themeModifier(p.theme.baseline, 0.85)};
  }
`;

const $Letter = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => themeModifier(p.theme.font.size, 2)};
  flex: 0;

  @media screen and (max-width: ${p => p.theme.breakpoint.smallDesktop}) {
    font-size: ${p => themeModifier(p.theme.font.size, 1.5)};
  }

  @media screen and (max-width: ${p => p.theme.breakpoint.tablet}) {
    font-size: ${p => themeModifier(p.theme.font.size, 1)};
  }

  @media screen and (max-width: ${p => p.theme.breakpoint.smallTablet}) {
    font-size: ${p => themeModifier(p.theme.font.size, 0.75)};
  }

  @media screen and (max-width: ${p => p.theme.breakpoint.mobile}) {
    font-size: ${p => themeModifier(p.theme.font.size, 0.65)};
  }
`;

const LetterKey: React.FC<Props> = ({ letter, isLit = false }) => (
  <$Container isLit={isLit}>
    <$Letter>{letter.toUpperCase()}</$Letter>
  </$Container>
);

const memoizedLetterKey = React.memo(LetterKey);

export { memoizedLetterKey as LetterKey };
