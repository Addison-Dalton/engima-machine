import { createSelector } from '@reduxjs/toolkit';
import { EnigmaStore } from '../../rootReducer';

export const getRotors = (state: EnigmaStore) => state.rotors;

export const selectRotors = createSelector(
  [getRotors],
  rotors => rotors
);
