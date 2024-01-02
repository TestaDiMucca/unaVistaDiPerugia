import useLibraryContext from 'src/hooks/useLibraryContext';
import Slide from './Slide';
import { Box } from '@chakra-ui/react';

export default function Show() {
  const { library } = useLibraryContext();

  return (
    <Box w="full" h="full" display="grid">
      <Slide file={library[0]} focused />
    </Box>
  );
}
