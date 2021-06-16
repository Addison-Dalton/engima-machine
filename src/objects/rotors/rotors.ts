export const rotorI: Rotor = {
  name: 'rotorI',
  type: 'rotor',
  turnOver: 16, // 16 is Q
  keys: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ'.split('')
};

export const rotorII: Rotor = {
  name: 'rotorII',
  type: 'rotor',
  turnOver: 4, // 4 is E
  keys: 'AJDKSIRUXBLHWTMCQGZNPYFVOE'.split('')
};

export const rotorIII: Rotor = {
  name: 'rotorIII',
  type: 'rotor',
  turnOver: 21, // 21 is V
  keys: 'BDFHJLCPRTXVZNYEIWGAKMUSQO'.split('')
};

export const reflectorUKWB: Rotor = {
  name: 'UKW-B',
  type: 'reflector',
  keys: 'YRUHQSLDPXNGOKMIEBFZCWVJAT'.split('')
};
