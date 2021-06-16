type RotorName = 'rotorI' | 'rotorII' | 'rotorIII' | 'UKW-B';

interface Rotor {
  name: RotorName;
  type: 'rotor' | 'reflector',
  turnOver?: number;
  keys: string[];
}

type RotorStore = Rotor[];
