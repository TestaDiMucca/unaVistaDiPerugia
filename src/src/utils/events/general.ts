import { Subject } from 'rxjs';

const generalEventBus = new Subject<TauriLinkEvent>();

export default generalEventBus;

export enum TauriLinkEventMessage {
  /** A request to open the settings dialogue */
  settings = 'settings',
}

export type TauriLinkEvent = {
  message: TauriLinkEventMessage;
};
