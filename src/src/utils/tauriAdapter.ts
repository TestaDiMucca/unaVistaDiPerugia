import { invoke } from '@tauri-apps/api/tauri';
import { window as apiWindow, event } from '@tauri-apps/api';
import debounce from 'lodash/debounce';
import generalEventBus, { TauriLinkEventMessage } from './events/general';

/** Sends a message to print into Tauri's console */
export const tauriPrint = (message: string) =>
  invoke('console_print', { message });

export const tauriPrintDebounced = debounce(tauriPrint, 500, {
  leading: true,
  trailing: false,
});

export const fullscreen = {
  set: (fullscreen: boolean): Promise<void> =>
    apiWindow.appWindow.setFullscreen(fullscreen),
  isOn: () => apiWindow.appWindow.isFullscreen(),
};

type Payload = {
  message: TauriLinkEventMessage;
};

/** Listen to custom events from the Rust wrapper layer */
const attachEventListeners = async () => {
  const menuUnSub = await event.listen<Payload>('menu_event', (e) => {
    generalEventBus.next({ message: e.payload.message });
  });

  const listenerUnSub = await event.listen('tauri://destroyed', () => {
    menuUnSub();
    listenerUnSub();
  });
};

void attachEventListeners();
