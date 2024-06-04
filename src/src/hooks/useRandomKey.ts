import { useEffect, useRef } from 'react';

const useRandomKey = (
  dependencies: any[] = [],
  initialRender = true
): number => {
  const firstRender = useRef(initialRender);
  const key = useRef(Math.random());

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      key.current = Math.random();
    }
  }, dependencies);

  return key.current;
};

export default useRandomKey;
