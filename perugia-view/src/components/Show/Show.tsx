import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import throttle from 'lodash/throttle';

import useLibraryContext from 'src/hooks/useLibraryContext';
import Slide from './Slide';
import ControlBar from './ControlBar';
import eventBus, { DriverEventEnum } from 'src/utils/eventBus';
import useToggleState from 'src/hooks/useToggleState';

const CACHE_AMOUNT = 2;
const CONTROL_HIDE_DELAY = 3000;

export default function Show() {
  const [cursor, setCursor] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const toggleStates = useToggleState(['playing']);
  const fadeoutTimer = useRef<NodeJS.Timeout>();

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

  const onNavigate = useCallback(
    (step: number) => () => navigate(step),
    [navigate]
  );

  const handleTogglePlayState = useCallback(() => {
    const newState = !toggleStates.playing.isOn;
    newState ? toggleStates.playing.on() : toggleStates.playing.off();
    eventBus.next({ type: DriverEventEnum.playStateChange, state: newState });
  }, [toggleStates.playing.isOn]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          navigate(-1);
          break;
        case 'ArrowRight':
          navigate(1);
          break;
        case ' ':
          handleTogglePlayState();
          break;
        default:
      }
    },
    [navigate, handleTogglePlayState]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const handleMouseMove = useCallback(
    throttle(() => {
      if (fadeoutTimer.current) clearTimeout(fadeoutTimer.current);

      setShowControls(true);
      toast.closeAll();

      fadeoutTimer.current = setTimeout(() => {
        setShowControls(false);
      }, CONTROL_HIDE_DELAY);
    }, 500),
    [fadeoutTimer.current]
  );

  return (
    <Box
      w="full"
      h="full"
      display="grid"
      onMouseMove={handleMouseMove}
      cursor={showControls ? undefined : 'none'}
    >
      {focusedFiles.map((file, i) =>
        file ? (
          <Slide
            key={`slide-${file.originalIndex}`}
            file={file}
            focused={i === CACHE_AMOUNT}
          />
        ) : null
      )}
      <ControlBar
        onForward={onNavigate(1)}
        onBack={onNavigate(-1)}
        isVisible={showControls}
      />
    </Box>
  );
}
