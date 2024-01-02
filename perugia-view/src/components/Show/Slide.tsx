import { Box, Image, SlideFade } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

import SVGSpinner from '../common/SVGSpinner';
import { COLORS } from 'src/utils/constants';

type Props = {
  file: EnrichedFile;
  focused?: boolean;
};

export default function Slide({ file, focused }: Props) {
  const url = useRef<string | undefined>();

  /** Lil trick to use an SVG as a background */
  const svgString = useMemo(
    () => encodeURIComponent(renderToStaticMarkup(<SVGSpinner />)),
    []
  );

  useEffect(() => {
    url.current = URL.createObjectURL(file.file);
  }, []);

  const clearObjectUrl = useCallback(() => {
    if (!url.current) return;

    console.log('revoke');
    URL.revokeObjectURL(url.current);
  }, [url.current]);

  const handleError = useCallback(() => {
    url.current = undefined;
  }, []);

  return (
    <SlideFade in={focused} offsetX="20px">
      <Box
        w="full"
        h="full"
        style={{
          backgroundImage: `url("data:image/svg+xml,${svgString}")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {url.current ? (
          <Image
            w="100vw"
            h="100vh"
            objectFit="contain"
            src={url.current}
            onLoad={clearObjectUrl}
            onError={handleError}
          />
        ) : (
          <Box
            w="xs"
            h="xs"
            color="gray.300"
            display="flex"
            justifyContent="center"
            alignItems="center"
            background={COLORS.darkGray}
          >
            <BrokenImageIcon />
          </Box>
        )}
      </Box>
    </SlideFade>
  );
}
