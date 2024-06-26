import { idbInstance } from './WebStore';

type CastWindow = Window &
  typeof globalThis & {
    [testMethod: string]: () => void;
  };

/**
 * Add some window methods for test purposes to control various operations
 */
export const initTestServices = () => {
  if (typeof window === 'undefined') return;

  const global = window as CastWindow;

  global.clearDb = () => idbInstance?.deleteAll('files');
};
