import { invoke } from '@tauri-apps/api/tauri';
// import { window as appWindow } from '@tauri-apps/api'

/** Sends a message to print into Tauri's console */
const tauriPrint = (message: string) => invoke('console_print', { message });

// appWindow.appWindow.setFullscreen(true);

export default tauriPrint;
