type SlotName = 'slot1' | 'slot2' | 'slot3' | 'slot4';

type Slot = {
  name: SlotName;
  rotor: Rotor;
  position: number;
};

type ChangeSlotPosition = {
  slot: SlotName;
  position: number;
};
