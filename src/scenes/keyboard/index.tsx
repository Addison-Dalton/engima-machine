import React, { useEffect, useState } from 'react';

import { OutputKeyboard } from './output';

export const KeyBoardController = () => {
  const [activeKey, setActiveKey] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // don't allow multiple keys to be considered "active"
      if (activeKey !== '') return;
      setActiveKey(e.key);
    };
    const handleKeyUp = () => setActiveKey('');

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const unsubscribe = () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
    return unsubscribe;
  }, [activeKey, setActiveKey]);

  return (
    <OutputKeyboard activeKey={activeKey} />
  );
};
