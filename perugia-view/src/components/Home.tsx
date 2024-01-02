import { Box, Image, Text } from '@chakra-ui/react';

import Dropzone from './common/Dropzone';

export default function Home() {
  return (
    <>
      <Box overflow="hidden" w="xs" borderRadius="full">
        <Image src="src/assets/DallE_Cat.png" />
      </Box>
      <Text color="#EFDADA" mt="4" opacity="0.5">
        Drop files in, or click here to select
      </Text>
      <Dropzone onDrop={console.log} />
    </>
  );
}
