/** Enriched format for displaying in library components */
type EnrichedFile = {
  file: File;
  originalIndex: number;
  mediaType: string;
  focused?: boolean;
};

/** Serialized format for saving into iDB */
type StoredFile = Omit<EnrichedFile, 'file'> & {
  serializedFile: string;
  fileName: string;
  fileType: string;
};

type AnyFnc = (...args: any[]) => void;

type Position =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left'
  | 'top-right';
