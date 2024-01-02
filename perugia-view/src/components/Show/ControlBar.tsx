import { Box, Slide } from '@chakra-ui/react';

import Dock from '../common/Dock';
import { COLORS } from 'src/utils/constants';

type Props = {
  isVisible: boolean;
  onForward: () => void;
  onBack: () => void;
};

export default function ControlBar({ isVisible }: Props) {
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
        ></Box>
      </Slide>
    </Dock>
  );
}
