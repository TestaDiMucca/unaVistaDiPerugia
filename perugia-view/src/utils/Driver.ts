import eventBus, { DriverAction } from './eventBus';

/**
 * Using event based system to decouple driving the slides
 *   this is to allow for reacting to various events like media plays
 *   and settings access
 */
class Driver {
  constructor() {}

  private emitEvent(ev: DriverAction) {
    eventBus.next(ev);
  }
}

export default new Driver();
