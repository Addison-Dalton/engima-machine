import { validKeys, nonEncodableKeys } from '../utils/array-alphabet';

export const getIsValidKey = (key: string) => validKeys.includes(key.toUpperCase());
export const getIsNonEncodableKey = (key: string) => nonEncodableKeys.includes(key.toUpperCase());
