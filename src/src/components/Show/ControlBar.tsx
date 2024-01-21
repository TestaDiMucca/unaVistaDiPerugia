import { Box, IconButton, Slide } from '@chakra-ui/react';
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ForwardIcon from '@mui/icons-material/ArrowForward';
import BackIcon from '@mui/icons-material/ArrowBack';
import FirstIcon from '@mui/icons-material/FirstPage';
import FolderIcon from '@mui/icons-material/Folder';

import Dock from '../common/Dock';
import { COLORS, Views } from 'src/utils/constants';
import { useCallback } from 'react';
import useUIStateContext from 'src/hooks/useUiStateContext';

type Props = {
  isVisible: boolean;
  playing: boolean;
  onForward: () => void;
  onBack: () => void;
  navigateTo: (cursor: number) => void;
  onTogglePlay: (s: boolean) => void;
};

export default function ControlBar({
  isVisible,
  playing,
  onBack,
  onForward,
  navigateTo,
  onTogglePlay,
}: Props) {
  const { setView } = useUIStateContext();
  const handlePlayStateChange = useCallback(
    (s: boolean) => () => {
      onTogglePlay(s);
    },
    [onTogglePlay]
  );

  const handleBackToLoad = useCallback(() => {
    setView(Views.home);
  }, []);

  const onRewind = useCallback(() => {
    navigateTo(0);
  }, [navigateTo]);

  return (
    <Dock>
      <Slide in={isVisible} direction="left">
        <Box
          h="80%"
          w="60px"
          p="4"
          borderRadius="4"
          borderRight="2px"
          borderColor="orange.500"
          background={COLORS.darkGray}
          boxShadow={`0px 0px 49px 0px ${COLORS.darkGray}`}
          ml="4"
          mt="4"
        >
          {playing ? (
            <IconButton
              onClick={handlePlayStateChange(false)}
              aria-label="pause"
              icon={<PauseIcon />}
            />
          ) : (
            <IconButton
              onClick={handlePlayStateChange(true)}
              aria-label="pause"
              icon={<PlayIcon />}
            />
          )}
          <IconButton
            onClick={onForward}
            aria-label="forward"
            icon={<ForwardIcon />}
          />
          <IconButton onClick={onBack} aria-label="back" icon={<BackIcon />} />
          <IconButton
            onClick={onRewind}
            aria-label="forward"
            icon={<FirstIcon />}
          />
          <IconButton
            onClick={handleBackToLoad}
            aria-label="forward"
            icon={<FolderIcon />}
          />
        </Box>
      </Slide>
    </Dock>
  );
}
