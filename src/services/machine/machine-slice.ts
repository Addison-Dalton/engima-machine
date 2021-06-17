import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { rotorI, rotorII, rotorIII, reflectorUKWB } from '../../objects/rotors/rotors';
import { handleEncoding, handleRotation, resetSlots } from './utils';

const initialState: MachineStore = {
  slots: [
    {
      name: 'slot1',
      rotor: rotorI,
      position: 0
    }, {
      name: 'slot2',
      rotor: rotorII,
      position: 0
    }, {
      name: 'slot3',
      rotor: rotorIII,
      position: 0
    },
    {
      name: 'slot4',
      rotor: reflectorUKWB,
      position: 0
    }
  ],
  outputKey: '',
  totalInput: '',
  totalOutput: ''
};

const slotSlice = createSlice({
  name: 'handleSlots',
  initialState,
  reducers: {
    handleRotorRotation(state, action: PayloadAction<string>) {
      const { slots } = state;

      // handles positioning of rotors
      handleRotation(slots);

      // handles encoding
      const inputKey = action.payload;
      // passing copy of array to avoid the function making changes to state array.
      const outputKey = handleEncoding([...slots], inputKey);

      state.totalInput += inputKey;
      state.outputKey = outputKey;
      state.totalOutput += outputKey;
    },
    handleNonEncodableKeys(state, action: PayloadAction<NonEncodableKey>) {
      const inputKey = action.payload.toUpperCase();
      const { slots } = state;

      switch (inputKey) {
        case ' ':
          state.totalOutput += ' ';
          break;
        case 'BACKSPACE': {
          // state.totalInput = action.payload.inputText;
          // resetSlots(slots);
          // const encodedKeys = state.totalInput.split('').map(key => {
          //   handleRotation(slots);
          //   return handleEncoding([...slots], key);
          // });

          // state.outputKey = encodedKeys[encodedKeys.length - 1];
          // state.totalOutput = encodedKeys.join();
          break;
        }
        case 'DELETE':
          state.totalInput = state.totalInput.slice(0, -1);
          state.totalOutput = state.totalOutput.slice(0, -1);
          break;
        default:
          break;
      }
    }
  }
});

export const {
  handleRotorRotation,
  handleNonEncodableKeys
} = slotSlice.actions;

export default slotSlice.reducer;
