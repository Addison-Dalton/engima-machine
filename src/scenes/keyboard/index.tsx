import React from 'react';
import { useSelector } from 'react-redux';

import { selectOutputKey } from '../../services/machine/machine-selector';

import { OutputKeyboard } from './output';

export const KeyBoardController = () => {
  const outputKey = useSelector(selectOutputKey);

  return (
    <OutputKeyboard activeKey={outputKey} />
  );
};
