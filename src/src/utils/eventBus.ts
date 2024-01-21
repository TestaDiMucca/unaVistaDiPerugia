import { Subject } from 'rxjs';

const eventBus = new Subject<DriverEvent | DriverAction>();

export default eventBus;

export enum DriverEventEnum {
  playStateChange = 'PlayStateChange',
  blockingStateChange = 'BlockingStateChange',
  /** Reset timer if manually advanced or whatnot */
  manualAction = 'manualAction',
}

export enum DriverActionEnum {
  advanceSlide = 'AdvanceSlide',
}

export type DriverAction = {
  type: DriverActionEnum.advanceSlide;
  step: number;
};

export type DriverEvent =
  | {
      type: DriverEventEnum.playStateChange;
      state: boolean;
    }
  | {
      type: DriverEventEnum.blockingStateChange;
      state: boolean;
      advance?: boolean;
    }
  | {
      type: DriverEventEnum.manualAction;
    };
