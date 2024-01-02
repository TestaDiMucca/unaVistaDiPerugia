import DefaultDropzone from 'react-dropzone';
import { Box, BoxProps } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import useUIStateContext from 'src/hooks/useUiStateContext';

type Props = {
  onDrop: (acceptedFiles: File[]) => void;
  children?: React.ReactNode;
} & BoxProps;

export default function Dropzone({ onDrop, children, ...boxProps }: Props) {
  const { setAlert } = useUIStateContext();

  const showInstructions = useCallback(
    () =>
      setAlert({
        status: 'info',
        message: 'Drop files here to load them',
      }),
    [setAlert]
  );

  const hideInstruction = useCallback(() => setAlert(null), [setAlert]);

  return (
    <DefaultDropzone
      onDrop={onDrop}
      onDragEnter={showInstructions}
      onDragLeave={hideInstruction}
    >
      {({ getRootProps, getInputProps }) => (
        <Box
          position="absolute"
          zIndex={1}
          top="0"
          bottom="0"
          right="0"
          left="0"
          w="full"
          cursor="pointer"
          {...boxProps}
        >
          <Box h="full" {...getRootProps()}>
            <input {...getInputProps()} />
            {children}
          </Box>
        </Box>
      )}
    </DefaultDropzone>
  );
}
