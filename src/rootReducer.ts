import { combineReducers } from '@reduxjs/toolkit';

import rotorReducer from './services/rotors/rotors-slice';
import machineReducer from './services/machine/machine-slice';

const rootReducer = combineReducers({
  rotors: rotorReducer,
  machine: machineReducer
});

export type EnigmaStore = ReturnType<typeof rootReducer>;

export default rootReducer;
