import {
  Input,
  Text,
  VStack,
  InputGroup,
  InputRightAddon,
  Checkbox,
} from '@chakra-ui/react';
import BasicModal, { ModalProps } from '../common/Modal';
import { ChangeEvent, useCallback } from 'react';
import useSettingsContext from 'src/hooks/useSettingsContext';
import SingleAccordion from '../common/SingleAccordion';
import { idbInstance } from 'src/utils/WebStore';
import Tooltip from '../common/Tooltip';

type Props = Omit<ModalProps, 'children' | 'title'>;

export default function SettingsModal(props: Props) {
  const {
    generalSettings,
    setGeneralSettings,
    overlaySettings,
    setOverlaySettings,
  } = useSettingsContext();

  const handleTimingChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setGeneralSettings({
        advanceTime: +e.target.value * 1000,
      }),
    []
  );

  const handleToggleCaching = useCallback(() => {
    const newSetting = !generalSettings.libraryCaching;
    setGeneralSettings({
      libraryCaching: newSetting,
    });

    if (!newSetting) void idbInstance?.deleteAll('files');
  }, [generalSettings.libraryCaching]);

  const handleToggleOverlaySetting = useCallback(
    (setting: keyof OverlaySettings) => () => {
      setOverlaySettings({
        [setting]: !overlaySettings[setting],
      });
    },
    [overlaySettings]
  );

  return (
    <BasicModal title="Settings" {...props}>
      <VStack alignItems="flex-start">
        <Text>Slide interval</Text>
        <InputGroup>
          <Input
            value={Math.round(generalSettings.advanceTime / 1000)}
            onChange={handleTimingChange}
            placeholder="Interval in seconds"
            type="number"
          />
          <InputRightAddon>s</InputRightAddon>
        </InputGroup>
        <Text>Display overlay</Text>
        <Checkbox
          isChecked={!!overlaySettings.enabled}
          onChange={handleToggleOverlaySetting('enabled')}
        >
          Enabled
        </Checkbox>
        <SingleAccordion title="Overlay settings">
          <VStack alignItems="flex-start">
            <Checkbox
              isChecked={overlaySettings.showFilename}
              onChange={handleToggleOverlaySetting('showFilename')}
            >
              Show file name
            </Checkbox>
            <Checkbox
              isChecked={overlaySettings.showIndex}
              onChange={handleToggleOverlaySetting('showIndex')}
            >
              Show index
            </Checkbox>
          </VStack>
        </SingleAccordion>
        <Text>Image caching</Text>
        <Tooltip
          label="Use with caution. Stores loaded files locally so they are present on next startup. Does not include videos."
          placement="left"
        >
          <Checkbox
            isChecked={!!generalSettings.libraryCaching}
            onChange={handleToggleCaching}
          >
            Enabled
          </Checkbox>
        </Tooltip>
      </VStack>
    </BasicModal>
  );
}
