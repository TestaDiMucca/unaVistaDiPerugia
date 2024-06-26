import { idbInstance } from './WebStore';
import { mapSeries } from './helpers';

export const ACCEPTED_TYPES: Set<File['type']> = new Set([
  'image/png',
  'image/jpeg',
  'image/gif',
  'video/quicktime',
  'video/mp4',
]);

/** Adds original index and other context to re-sort with */
export const filterAndEnrichFiles = (files: File[]): EnrichedFile[] =>
  files.reduce<EnrichedFile[]>((a, f, i) => {
    if (!ACCEPTED_TYPES.has(f.type) || !f.type) return a;

    a.push({
      file: f,
      originalIndex: i,
      mediaType: f.type.split('/')[0],
    });

    return a;
  }, []);

export const serializeDataToString = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = reject;
    reader.onload = (event) => {
      const data = event.target?.result;

      resolve(data as string);
    };

    reader.readAsDataURL(file);
  });

export const deserializeStringToData = (
  base64String: string,
  fileName: string,
  fileType: string
) => {
  const parts = base64String.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  const blob = new Blob([uInt8Array], { type: contentType });

  return new File([blob], fileName, { type: fileType });
};

/**
 * Clear any previous cached library and replace
 */
export const storeLibrary = async (files: EnrichedFile[]) => {
  await idbInstance?.deleteAll('files');
  const converted = await mapSeries(
    files.filter((f) => f.mediaType === 'image'),
    async (file) => {
      const serialized: StoredFile = {
        serializedFile: await serializeDataToString(file.file),
        originalIndex: file.originalIndex,
        mediaType: file.mediaType,
        fileName: file.file.name,
        fileType: file.file.type,
      };

      return serialized;
    }
  );

  await idbInstance?.putBulkValue('files', converted);
};

/** Deserialized cached libraries */
export const readLibrary = async (): Promise<EnrichedFile[]> => {
  const stored = await idbInstance?.getAllValue('files');

  if (!stored || !idbInstance) return [];

  const enrichedFiles = await mapSeries(
    (stored as StoredFile[]).filter((s) => !!s.serializedFile),
    (storedFile) => {
      const result: EnrichedFile = {
        originalIndex: storedFile.originalIndex,
        mediaType: storedFile.mediaType,
        file: deserializeStringToData(
          storedFile.serializedFile,
          storedFile.fileName,
          storedFile.fileType
        ),
      };

      return result;
    }
  );

  return enrichedFiles;
};
