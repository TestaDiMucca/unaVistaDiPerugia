type EnrichedFile = {
  file: File;
  originalIndex: number;
  mediaType: string;
  focused?: boolean;
};

type AnyFnc = (...args: any[]) => void;
