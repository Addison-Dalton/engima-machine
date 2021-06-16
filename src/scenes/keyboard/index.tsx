import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleRotorRotation } from '../../services/machine/machine-slice';
import { selectOutputKey } from '../../services/machine/machine-selector';
import { useMountState } from '../../services/enhance';
import { getAlphabetKeyNum } from '../../services/utils/keys';

import { OutputKeyboard } from './output';

export const KeyBoardController = () => {
  const outputKey = useSelector(selectOutputKey);
  const hasMounted = useMountState();
  const dispatch = useDispatch();

  useEffect(() => {
    // don't fire on initial render
    if (!hasMounted) return undefined;
    const handleKeyDown = (e: KeyboardEvent) => {
      const keyNum = getAlphabetKeyNum(e.key);
      if (keyNum < 0) return;
      dispatch(handleRotorRotation(keyNum));
    };

    window.addEventListener('keydown', handleKeyDown);

    const unsubscribe = () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    return unsubscribe;
  }, [hasMounted]);

  return (
    <OutputKeyboard activeKey={outputKey} />
  );
};
