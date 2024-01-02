import { Box, BoxProps } from '@chakra-ui/react';

type Props = Omit<BoxProps, 'children'> & {
  src: any;
  autoPlay?: boolean;
};

export default function Video({ src, autoPlay = false, ...props }: Props) {
  return (
    <Box
      src={src}
      autoPlay={autoPlay}
      as="video"
      controls
      objectFit="contain"
      {...props}
    />
  );
}
