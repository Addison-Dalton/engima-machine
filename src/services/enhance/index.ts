import { useState, useEffect } from 'react';

export const useMountState = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true));
  return hasMounted;
};
