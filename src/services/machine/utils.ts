import { getAlphabetKeyByNum, getAlphabetKeyNum } from '../utils/keys';
import { alphabet } from '../utils/array-alphabet';
import { modulo } from '../utils/modulo';

const getKeyNumWithPosition = (keyNum: number, position: number, op: 'add' | 'subtract') => {
  let keyNumOpsPosition;
  switch (op) {
    case 'add':
      keyNumOpsPosition = keyNum + position;
      break;

    case 'subtract':
      keyNumOpsPosition = keyNum - position;
      break;

    default:
      keyNumOpsPosition = null;
  }

  if (keyNumOpsPosition === null) return -1;
  return modulo(keyNumOpsPosition, alphabet.length);
};

const getOutputKeyNum = (
  keys: string[],
  keyIdx: number,
  keyValue: string,
  findByIndex?: boolean
) => {
  if (findByIndex) {
    return keys.indexOf(keyValue);
  }

  return getAlphabetKeyNum(keys[keyIdx]);
};

const encode = (slots: Slot[], initialKeyNum: number, isSecondPass?: boolean) => {
  const encodedKeyNum = slots.reduce((keyNum: number, slot) => {
    console.log('-------------------------');
    console.log(`slot: ${slot.name} at position ${slot.position}. Given keyNum: ${keyNum}. Using rotor: ${slot.rotor.name}, with keys: ${slot.rotor.keys}`);
    if (keyNum < 0) return -1;
    const inputKeyNumWithPosition = getKeyNumWithPosition(keyNum, slot.position, 'add');
    const inputKeyLetter = getAlphabetKeyByNum(inputKeyNumWithPosition);
    const outputKeyNum = getOutputKeyNum(
      slot.rotor.keys,
      inputKeyNumWithPosition,
      inputKeyLetter,
      isSecondPass
    );
    console.log('Calc key as', getAlphabetKeyByNum(outputKeyNum));
    console.log('Key num is, ', outputKeyNum);
    console.log('output key num with positiuon', getKeyNumWithPosition(outputKeyNum, slot.position, 'subtract'));
    return getKeyNumWithPosition(outputKeyNum, slot.position, 'subtract');
  }, initialKeyNum);
  return encodedKeyNum;
};

export const handleEncoding = (slots: Slot[], initialKey: string) => {
  // don't encode spaces
  if (initialKey === ' ') return ' ';

  const firstPassEncodedKeyNum = encode(slots, getAlphabetKeyNum(initialKey));
  const secondPassSlots = slots.reverse();
  secondPassSlots.shift(); // remove the reflector as it was used in the first pass.

  console.log('first pass num: ', firstPassEncodedKeyNum);

  const secondPassEncodedKeyNum = encode(slots, firstPassEncodedKeyNum, true);
  console.log('second pass num: ', secondPassEncodedKeyNum);
  return getAlphabetKeyByNum(secondPassEncodedKeyNum);
};

export const handleRotation = (slots: Slot[]) => {
  slots.some((slot, idx) => {
    // reflectors don't have positions; so return
    if (slot.rotor.type === 'reflector') return true;

    // calculate slots new position
    const newPosition = slot.position >= 25 ? 0 : slot.position + 1;
    slots[idx].position = newPosition;

    return !!(slot.rotor.turnOver !== slot.position);
  });
};

export const resetSlots = (slots: Slot[]) => {
  slots.forEach(slot => {
    slot.position = 0;
  });
};
