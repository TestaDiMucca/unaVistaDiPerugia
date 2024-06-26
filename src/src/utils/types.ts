type EnrichedFile = {
  file: File;
  originalIndex: number;
  mediaType: string;
  focused?: boolean;
};

type StoredFile = Omit<EnrichedFile, 'file'> & {
  serializedFile: string;
  fileName: string;
  fileType: string;
};

type AnyFnc = (...args: any[]) => void;
