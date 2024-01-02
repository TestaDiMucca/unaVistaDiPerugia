import { Box, BoxProps } from '@chakra-ui/react';
import { CSSProperties } from 'react';

type Props = BoxProps & {
  contentSide?: CSSProperties['justifyContent'];
  anchor?: 'top' | 'bottom';
};

export default function Dock({
  anchor = 'bottom',
  contentSide = 'center',
  children,
  ...boxProps
}: Props) {
  return (
    <Box
      w="full"
      position="absolute"
      left="0"
      right="0"
      display="flex"
      justifyContent={contentSide}
      {...(anchor === 'bottom' ? { bottom: 0 } : { top: 0 })}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
