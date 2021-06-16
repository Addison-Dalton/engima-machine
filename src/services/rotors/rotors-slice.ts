import { createSlice } from '@reduxjs/toolkit';
import { rotorI, rotorII, rotorIII } from '../../objects/rotors/rotors';

const initialState: RotorStore = [rotorI, rotorII, rotorIII];

const rotorSlice = createSlice({
  name: 'handleRotors',
  initialState,
  reducers: {}
});

export default rotorSlice.reducer;
