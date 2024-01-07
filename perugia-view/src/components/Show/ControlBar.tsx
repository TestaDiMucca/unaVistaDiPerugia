import { Box, IconButton, Slide } from '@chakra-ui/react';
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import Dock from '../common/Dock';
import { COLORS } from 'src/utils/constants';
import { useCallback } from 'react';

type Props = {
  isVisible: boolean;
  playing: boolean;
  onForward: () => void;
  onBack: () => void;
  onTogglePlay: (s: boolean) => void;
};

export default function ControlBar({
  isVisible,
  playing,
  onTogglePlay,
}: Props) {
  const handlePlayStateChange = useCallback(
    (s: boolean) => () => {
      onTogglePlay(s);
    },
    [onTogglePlay]
  );

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
        </Box>
      </Slide>
    </Dock>
  );
}
