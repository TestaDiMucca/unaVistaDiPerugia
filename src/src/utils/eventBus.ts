import { Subject } from 'rxjs';

const eventBus = new Subject<DriverEvent | DriverAction>();

export default eventBus;

/** Events the Driver should listen to */
export enum DriverEventEnum {
  playStateChange = 'PlayStateChange',
  /** A temporary block state, not the master start/stop. For modal, video, etc. */
  blockingStateChange = 'BlockingStateChange',
  /** Reset timer if manually advanced or whatnot */
  manualAction = 'manualAction',
}

export enum DriverActionEnum {
  advanceSlide = 'AdvanceSlide',
}

/** Actions that trigger from the Driver */
export type DriverAction = {
  type: DriverActionEnum.advanceSlide;
  /** Negative means to go back */
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
