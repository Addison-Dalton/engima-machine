export const getRotorByName = (rotorName: RotorName, rotors: Rotor[]) =>
  rotors.find(r => r.name === rotorName);

export const getKeyByNumber = (rotor: Rotor, keyNum: number) => {
  const key = Object.keys(rotor.keys[keyNum]);
  return key || undefined;
};
