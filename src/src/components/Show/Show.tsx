import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, useEventListener, useToast } from '@chakra-ui/react';
import throttle from 'lodash/throttle';

import 'src/utils/Driver';
import useLibraryContext from 'src/hooks/useLibraryContext';
import Slide from './Slide';
import ControlBar from './ControlBar';
import eventBus, {
  DriverActionEnum,
  DriverEventEnum,
} from 'src/utils/events/driver';
import useToggleState from 'src/hooks/useToggleState';
import { CACHE_AMOUNT, CONTROL_HIDE_DELAY } from 'src/utils/constants';

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
        if (toggleStates.playing.isOn) handleTogglePlayState(false);
        return;
      }

      setCursor(targetCursor);
    },
    [cursor, library, toggleStates.playing.isOn]
  );

  const onNavigateTo = useCallback((cursor: number) => {
    setCursor(cursor);
  }, []);

  const onNavigate = useCallback(
    (step: number) => () => navigate(step),
    [navigate]
  );

  useEffect(() => {
    const sub = eventBus.subscribe((e) => {
      switch (e.type) {
        case DriverActionEnum.advanceSlide:
          navigate(e.step);
          break;
        default:
      }
    });

    return () => sub.unsubscribe();
  }, [navigate]);

  const handleTogglePlayState = useCallback(
    (newState: boolean) => {
      if (newState === toggleStates.playing.isOn) return;

      if (newState) {
        toggleStates.playing.on();
      } else {
        toggleStates.playing.off();
      }
      eventBus.next({ type: DriverEventEnum.playStateChange, state: newState });
    },
    [toggleStates.playing.isOn]
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
        case ' ':
          handleTogglePlayState(!toggleStates.playing.isOn);
          break;
        default:
      }
    },
    [navigate, toggleStates.playing.isOn]
  );

  useEventListener('keydown', handleKeyDown);

  const handleMouseMove = useCallback(
    /** Fade out the bar after a moment of mouse inactivity */
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
      overflow="hidden"
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
        navigateTo={onNavigateTo}
        onTogglePlay={handleTogglePlayState}
        playing={toggleStates.playing.isOn}
      />
    </Box>
  );
}
