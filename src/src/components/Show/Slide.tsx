import { Box, Image, SlideFade, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

import SVGSpinner from '../common/SVGSpinner';
import { COLORS } from 'src/utils/constants';
import Video from '../common/Video';

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
  }, [file.originalIndex]);

  const clearObjectUrl = useCallback(() => {
    if (!url.current) return;
    URL.revokeObjectURL(url.current);
  }, [url.current]);

  const handleError = useCallback(() => {
    url.current = undefined;
  }, []);

  return (
    <SlideFade
      in={focused}
      offsetY="20px"
      transition={{ exit: { duration: 0.5 }, enter: { duration: 0.5 } }}
    >
      <Box
        position={focused ? undefined : 'absolute'}
        opacity={focused ? 1 : 0}
        transitionProperty="opacity"
        transitionDuration="0.5s"
        w="full"
        h="full"
        style={{
          backgroundImage: `url("data:image/svg+xml,${svgString}")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {url.current ? (
          file.mediaType === 'video' ? (
            <Video src={url.current} autoPlay />
          ) : (
            <Image
              w="100vw"
              h="100vh"
              objectFit="contain"
              src={url.current}
              onLoad={clearObjectUrl}
              onError={handleError}
            />
          )
        ) : (
          <Box
            w="full"
            h="100vh"
            color="gray.300"
            display="flex"
            justifyContent="center"
            alignItems="center"
            background={COLORS.darkGray}
            scale="1.3"
          >
            <BrokenImageIcon />
            <Text ml="2">{file.file.name}</Text>
          </Box>
        )}
      </Box>
    </SlideFade>
  );
}
