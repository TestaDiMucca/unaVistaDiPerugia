import { Input, Text, VStack } from '@chakra-ui/react';
import BasicModal, { ModalProps } from '../common/Modal';
import { ChangeEvent, useCallback } from 'react';
import useSettingsContext from 'src/hooks/useSettingsContext';

type Props = Omit<ModalProps, 'children' | 'title'>;

export default function SettingsModal(props: Props) {
  const { advanceTime, setAdvanceTime } = useSettingsContext();

  const handleTimingChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setAdvanceTime(+e.target.value),
    []
  );

  return (
    <BasicModal title="Settings" {...props}>
      <VStack alignItems="flex-start">
        <Text>Slide interval</Text>
        <Input
          value={advanceTime}
          onChange={handleTimingChange}
          type="number"
        ></Input>
      </VStack>
    </BasicModal>
  );
}
