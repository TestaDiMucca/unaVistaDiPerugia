import { Card, CardProps, Text } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import useLibraryContext from 'src/hooks/useLibraryContext';
import useSettingsContext from 'src/hooks/useSettingsContext';
import { DEFAULT_INFO_POS } from 'src/utils/constants';

type Props = {
  focusedFile: EnrichedFile | null;
};

const MARGIN = '1em';

const InfoOverlay: FC<Props> = ({ focusedFile }) => {
  const { overlaySettings } = useSettingsContext();
  const { library } = useLibraryContext();

  const placement = useMemo(() => {
    const base: CardProps = {};

    const position = overlaySettings.position ?? DEFAULT_INFO_POS;

    if (position.includes('left')) {
      base['left'] = MARGIN;
    } else if (position.includes('right')) {
      base['right'] = MARGIN;
    } else if (position.includes('center')) {
      base['left'] = '50vw';
      base['transform'] = 'translateX(-50%)';
    }

    if (position.includes('top')) {
      base['top'] = MARGIN;
    } else {
      base['bottom'] = MARGIN;
    }

    return base;
  }, [overlaySettings.position]);

  if (!overlaySettings.enabled || !focusedFile) return null;

  if (!overlaySettings.showFilename && !overlaySettings.showIndex) return null;

  return (
    <Card
      {...placement}
      position="fixed"
      p="2"
      zIndex={20}
      display="flex"
      flexDir="row"
      gap="2"
    >
      {overlaySettings.showIndex && (
        <Text>
          {focusedFile.originalIndex + 1}/{library.length}
        </Text>
      )}
      {overlaySettings.showFilename && <Text>{focusedFile.file.name}</Text>}
    </Card>
  );
};

export default InfoOverlay;
