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
