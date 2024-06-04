/** Different full screens that are available */
export enum Views {
  /** Nothing is loaded */
  home = 'home',
  /** Images are loaded */
  show = 'show',
}

/**
 * Recommend vsc extension: colorize
 */
export const COLORS = {
  darkGray: '#161414',
  blue: '#B2C4CD',
  grass: '#85865F',
  herb: '#515C3C',
  wheat: '#F5EACF',
  tan: '#CEB793',
  ochre: '#8A584C',
};

/** Default time each slide appears */
export const DEFAULT_SLIDE_ADVANCE_TIME = 4000;

/** How many pictures ahead/behind should we load into memory */
export const CACHE_AMOUNT = 2;

/** How long to wait before we hide the sidebar */
export const CONTROL_HIDE_DELAY = 3000;
