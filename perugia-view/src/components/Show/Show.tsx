import { Box, useToast } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import useLibraryContext from 'src/hooks/useLibraryContext';
import Slide from './Slide';

const CACHE_AMOUNT = 2;

export default function Show() {
  const [cursor, setCursor] = useState(0);
  const { library } = useLibraryContext();
  const toast = useToast();

  /** "Preload" files in case they take time, to make transitions smoother */
  const focusedFiles = useMemo(() => {
    const cache: Array<null | EnrichedFile> = [];

    for (let i = -CACHE_AMOUNT; i <= CACHE_AMOUNT; i++) {
      const j = cursor + i;
      cache.push(j >= 0 && j < library.length ? library[j] : null);
    }

    return cache;
  }, [cursor, library]);

  const navigate = useCallback(
    (step: number) => {
      const targetCursor = step + cursor;
      if (targetCursor < 0 || targetCursor >= library.length) {
        toast.closeAll();
        toast({ title: 'No more!' });
        return;
      }

      setCursor(targetCursor);
    },
    [cursor, library]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          navigate(-1);
          break;
        case 'ArrowRight':
          navigate(1);
          break;
        default:
      }
    },
    [navigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <Box w="full" h="full" display="grid">
      {focusedFiles.map((file, i) =>
        file ? (
          <Slide
            key={`slide-${file.originalIndex}`}
            file={file}
            focused={i === CACHE_AMOUNT}
          />
        ) : null
      )}
    </Box>
  );
}
