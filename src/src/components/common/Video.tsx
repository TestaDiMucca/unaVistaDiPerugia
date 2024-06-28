import { useCallback, useEffect, useRef } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import driverEventBus, { DriverEventEnum } from 'src/utils/events/driver';

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
      driverEventBus.next({
        type: DriverEventEnum.blockingStateChange,
        state: true,
      });
    }

    /** Always unlock, in case a user paused. */
    if (!focused && prevFocused.current) {
      driverEventBus.next({
        type: DriverEventEnum.blockingStateChange,
        state: false,
        ...(playing ? { advance: true } : {}),
      });
    }

    prevFocused.current = focused ?? false;
    // start video, listen to finish to pause unpause
  }, [playing, focused, prevFocused.current, rewindAndPlay]);

  const onStartedPlaying = useCallback(() => {}, [playing]);

  const onDonePlaying = useCallback(() => {
    if (!playing) return;

    driverEventBus.next({
      type: DriverEventEnum.blockingStateChange,
      state: false,
      advance: true,
    });
  }, [playing]);

  return (
    <Box
      src={src}
      ref={videoRef}
      autoPlay={autoPlay}
      as="video"
      controls
      objectFit="contain"
      onEnded={onDonePlaying}
      onPlay={onStartedPlaying}
      {...props}
    />
  );
}
