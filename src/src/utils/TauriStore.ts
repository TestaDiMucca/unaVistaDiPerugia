import { Store } from '@tauri-apps/plugin-store';

export type TauriStore = {
  library: EnrichedFile[];
  id: string;
};

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
