import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { rotorI, rotorII, rotorIII, reflectorUKWB } from '../../objects/rotors/rotors';
import { handleEncoding } from './utils';

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
  outputKey: ''
};

const slotSlice = createSlice({
  name: 'handleSlots',
  initialState,
  reducers: {
    handleRotorRotation(state, action: PayloadAction<number>) {
      const { slots } = state;

      // handles positioning of rotors
      slots.some((slot, idx) => {
        // reflectors don't have positions; so return
        if (slot.rotor.type === 'reflector') return true;

        // calculate slots new position
        const newPosition = slot.position >= 25 ? 0 : slot.position + 1;
        slots[idx].position = newPosition;

        // TODO keeping for now, might could use for ring settings
        // const newRotorKeys = slot.rotor.keys;
        // const firstKey = newRotorKeys.shift();
        // newRotorKeys.push(firstKey || '');
        // slots[idx].rotor.keys = newRotorKeys;

        return !!(slot.rotor.turnOver !== slot.position);
      });

      // handles encoding
      // passing copy of array to avoid the function making changes to state array.
      state.outputKey = handleEncoding([...slots], action.payload);
    }
  }
});

export const {
  handleRotorRotation
} = slotSlice.actions;

export default slotSlice.reducer;
