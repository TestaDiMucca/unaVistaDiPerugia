import { useCallback, useEffect, useRef } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type Props = Omit<BoxProps, 'children'> & {
  src: any;
  autoPlay?: boolean;
  playing?: boolean;
  focused?: boolean;
};

export default function Video({
  src,
  autoPlay = false,
  playing,
  focused,
  ...props
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevFocused = useRef(false);

  const rewindAndPlay = useCallback(() => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;
    video.play();
  }, [videoRef.current]);

  /** Mount and unmount logic */
  useEffect(() => {
    if (!playing) return;

    if (focused && !prevFocused.current && playing) {
      rewindAndPlay();
      // signal a pause
    }

    if (!focused && prevFocused.current) {
      // moving off frame
      // signal an unpause
    }

    // start video, listen to finish to pause unpause
  }, [playing, focused, prevFocused.current, rewindAndPlay]);

  return (
    <Box
      src={src}
      ref={videoRef}
      autoPlay={autoPlay}
      as="video"
      controls
      objectFit="contain"
      onEnded={() => {}}
      onPlay={() => {}}
      {...props}
    />
  );
}
