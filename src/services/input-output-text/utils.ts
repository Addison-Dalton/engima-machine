export const containsValidKeys = (keys: string) => /^[A-Z]+$/.test(keys.toUpperCase());

export const filterInvalidKeys = (keys: string) => keys.replace(/[^a-zA-Z ]+/gm, '');

export const getIsSingleKeyChange = (oldInput: string, newInput: string) => {
  // handle case that nothing has been entered yet.
  if (oldInput.length === 0 && newInput.length === 1) return true;

  // remove last character as we only want to check if
  // the inputs are the same without newly added characters
  const newInputSub = newInput.slice(0, -1);
  return oldInput.toUpperCase() === newInputSub.toUpperCase();
};
