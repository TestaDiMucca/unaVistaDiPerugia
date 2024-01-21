import eventBus, {
  DriverAction,
  DriverActionEnum,
  DriverEventEnum,
} from './eventBus';

/**
 * Using event based system to decouple driving the slides
 *   this is to allow for reacting to various events like media plays
 *   and settings access
 */
class Driver {
  private timer: NodeJS.Timeout | null = null;
  private advanceInterval = 4000;
  running = false;
  private paused = false;

  constructor() {
    this.addEventListeners();
  }

  private emitEvent = (ev: DriverAction) => {
    eventBus.next(ev);
  };

  private advance = () => {
    if (this.paused) return;

    this.emitEvent({
      type: DriverActionEnum.advanceSlide,
      step: 1,
    });
  };

  public start = (interval?: number) => {
    if (interval) this.advanceInterval = interval;
    this.running = true;

    this.timer = setInterval(this.advance, this.advanceInterval);
  };

  public stop = () => {
    if (this.timer) clearInterval(this.timer);
    this.running = false;
  };

  public pause = () => {
    this.paused = true;
  };

  public unpause = () => {
    if (this.paused) return;

    this.paused = false;
    this.refresh();
  };

  private refresh = () => {
    if (!this.running) return;

    this.stop();
    this.start();
  };

  private addEventListeners() {
    eventBus.subscribe((e) => {
      console.log(e);
      switch (e.type) {
        case DriverEventEnum.playStateChange:
          if (e.state) this.start();
          else this.stop();
          break;
        case DriverEventEnum.blockingStateChange:
          if (e.state) {
            this.unpause();
            if (e.advance) this.advance();
          } else this.pause();
          break;
        case DriverEventEnum.manualAction:
          this.refresh();
          break;
        default:
      }
    });
  }
}

export default new Driver();
