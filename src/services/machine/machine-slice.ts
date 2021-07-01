import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { rotorI, rotorII, rotorIII, reflectorUKWB } from '../../objects/rotors/rotors';
import { handleEncoding, handleRotation, resetSlots, getIsValidPosition } from './utils';

const initialState: MachineStore = {
  slots: [
    {
      name: 'slot1',
      rotor: rotorI,
      position: 0,
      initialPosition: 0
    }, {
      name: 'slot2',
      rotor: rotorII,
      position: 0,
      initialPosition: 0
    }, {
      name: 'slot3',
      rotor: rotorIII,
      position: 0,
      initialPosition: 0
    },
    {
      name: 'slot4',
      rotor: reflectorUKWB,
      position: 0,
      initialPosition: 0
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
    handleChangeInitialRotorPosition(state, action: PayloadAction<ChangeSlotPositionPayload>) {
      const { slotName, position } = action.payload;
      const slotIdx = state.slots.findIndex(s => s.name === slotName);
      const positionIsValid = getIsValidPosition(position);
      if (slotIdx < 0 || !positionIsValid) return;
      state.slots[slotIdx].initialPosition = position;
    },
    handleSingleRotorRotation(state, action: PayloadAction<string>) {
      const { slots } = state;
      const inputKey = action.payload;
      state.totalInput += inputKey;

      // don't rotate or encode for space.
      if (inputKey === ' ') {
        state.totalOutput += ' ';
        return;
      }

      // handles positioning of rotors
      handleRotation(slots);

      // handles encoding
      // passing copy of array to avoid the function making changes to state array.
      const outputKey = handleEncoding([...slots], inputKey);

      state.outputKey = outputKey;
      state.totalOutput += outputKey;
    },
    // used to encode entire input at once
    handleFullRotorRotation(state, action: PayloadAction<string>) {
      const { slots } = state;
      state.totalInput = action.payload.toUpperCase();

      resetSlots(slots);
      const encodedKeys = state.totalInput.split('').map(key => {
        // don't rotate or encode for space.
        if (key === ' ') return ' ';
        handleRotation(slots);
        return handleEncoding([...slots], key);
      });

      state.outputKey = encodedKeys[encodedKeys.length - 1];
      state.totalOutput = encodedKeys.join('');
    }
  }
});

export const {
  handleSingleRotorRotation,
  handleFullRotorRotation,
  handleChangeInitialRotorPosition
} = slotSlice.actions;

export default slotSlice.reducer;
