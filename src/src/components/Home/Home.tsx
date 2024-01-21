import { useCallback } from 'react';
import { Box, Image, Text, VStack, useToast } from '@chakra-ui/react';

import Dropzone from '../common/Dropzone';
import { filterAndEnrichFiles } from 'src/utils/files.helpers';
import useLibraryContext from 'src/hooks/useLibraryContext';
import useUIStateContext from 'src/hooks/useUiStateContext';
import { Views } from 'src/utils/constants';

export default function Home() {
  const toast = useToast();
  const { setLibrary } = useLibraryContext();
  const { setView } = useUIStateContext();

  const handleAddFiles = useCallback((files: File[]) => {
    const acceptedFiles = filterAndEnrichFiles(files);

    if (acceptedFiles.length === 0)
      return toast({
        title: 'No files loaded',
        description:
          'Please check that you have selected supported file formats.',
        status: 'error',
        isClosable: true,
      });

    setLibrary(acceptedFiles);
    setView(Views.show);
  }, []);

  return (
    <Box
      h="full"
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        padding="10"
        borderRadius="4"
        border="1px solid"
        borderColor="orange.500"
        w="sm"
        h="md"
      >
        <Box overflow="hidden" w="xs" borderRadius="full">
          <Image src="src/assets/DallE_Cat.png" />
        </Box>
        <Text color="#EFDADA" mt="4" opacity="0.5">
          Drop files in, or click here to select
        </Text>
      </VStack>

      <Dropzone onDrop={handleAddFiles} />
    </Box>
  );
}
