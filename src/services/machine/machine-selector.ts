import { createSelector } from '@reduxjs/toolkit';
import { EnigmaStore } from '../../rootReducer';

export const getMachine = (state: EnigmaStore) => state.machine;
export const getSlots = (state: EnigmaStore) => state.machine.slots;

export const selectSlots = createSelector(
  [getMachine],
  machine => machine.slots
);

export const selectOutputKey = createSelector(
  [getMachine],
  machine => machine.outputKey
);

export const selectTotalOutput = createSelector(
  [getMachine],
  machine => machine.totalOutput
);
