import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { DropdownSelection } from '../../components/dropdown';

import { themeModifier } from '../../theme/utils';
import { alphabet } from '../../services/utils/array-alphabet';
import { handleChangeInitialRotorPosition } from '../../services/machine/machine-slice';
import { getSlots } from '../../services/machine/machine-selector';

const $Container = styled.div`
  select {
    margin: ${p => themeModifier(p.theme.baseline, 0.25)};
  }
`;

export const RotorPositions = () => {
  const dispatch = useDispatch();
  const slots = useSelector(getSlots);
  const positionOptions = alphabet.map((letter, idx): SelectOption =>
    ({ name: letter, value: idx }));

  const handleChange = useCallback((slotName: SlotName, position: string) => {
    dispatch(handleChangeInitialRotorPosition({ slotName, position: parseInt(position, 10) }));
  }, [dispatch, handleChangeInitialRotorPosition]);

  return (
    <$Container>
      {slots.map(s => {
        if (s.rotor.type === 'reflector') return null;
        return (
          <DropdownSelection
            options={positionOptions}
            handleChange={e => handleChange(s.name, e.target.value)}
          />
        );
      })}
    </$Container>
  );
};
