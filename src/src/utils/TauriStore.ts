import { Store } from '@tauri-apps/plugin-store';

export type TauriStore = {
  library: EnrichedFile[];
  id: string;
};

/**
 * Note as of last attempt (Jun '24), object is null. Maybe improper setup or beta package.
 * @link https://docs.rs/crate/tauri-plugin-store/latest#:~:text=As%20seen%20above%2C%20values%20added%20to%20the%20store,load%20them%20manually%20later%20like%20so%3A%20await%20store.load%28%29%3B
 */
const store = new Store('.settings.dat');

const setStore = <T extends keyof TauriStore>(key: T, value: TauriStore[T]) =>
  store.set(key, value);

const getStore = <T extends keyof TauriStore>(key: T): Promise<TauriStore[T]> =>
  store.get(key) as Promise<TauriStore[T]>;

const saveStore = () => store.save();

export const TauriStore = {
  get: getStore,
  save: saveStore,
  set: setStore,
};
