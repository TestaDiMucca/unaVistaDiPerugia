type EnrichedFile = {
  file: File;
  originalIndex: number;
  mediaType: string;
  focused?: boolean;
};

type AnyFnc = (...args: any[]) => void;

type Position =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left'
  | 'top-right';
