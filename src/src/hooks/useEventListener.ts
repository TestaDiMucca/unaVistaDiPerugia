import { useEffect } from 'react';
import throttle from 'lodash/throttle';

/**
 * Handles cleaning up event listeners
 */
const useEventListener = (eventName: keyof DocumentEventMap, fn: AnyFnc) => {
  useEffect(() => {
    /* Prevents double-fires */
    const throttledFn = throttle(fn, 300);

    document.addEventListener(eventName, throttledFn);

    return () => document.removeEventListener(eventName, throttledFn);
  }, [eventName, fn]);
};

export default useEventListener;
