import { alphabet } from './array-alphabet';

export const getAlphabetKeyNum = (key: string) => alphabet.findIndex(k => k === key.toUpperCase());

export const getAlphabetKeyByNum = (keyNum: number) => alphabet[keyNum] || '';
